import { groq } from "@ai-sdk/groq";
import { smoothStream, streamText } from "ai";
import { after } from "next/server";
import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function isChatMessage(value: unknown): value is ChatMessage {
  return (
    typeof value === "object" &&
    value !== null &&
    "role" in value &&
    "content" in value &&
    (value.role === "user" || value.role === "assistant") &&
    typeof value.content === "string"
  );
}

async function persistMessage({
  chatId,
  role,
  content,
}: {
  chatId: string;
  role: ChatMessage["role"];
  content: string;
}) {
  try {
    await db.insert(messages).values({
      chatId,
      role,
      content,
    });
  } catch (error) {
    console.error("Failed to persist chat message:", error);
  }
}

export async function POST(req: Request) {
  const body = (await req.json()) as { messages?: unknown };
  const incomingMessages = Array.isArray(body.messages)
    ? body.messages.filter(isChatMessage)
    : [];
  const { userId } = await auth();
  const defaultChatId = "8824b103-2408-49c2-bed4-1d68bdfeb0e6";
  const groqModel = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!process.env.GROQ_API_KEY) {
    return Response.json(
      {
        error: "GROQ_API_KEY is not configured on the server.",
      },
      { status: 500 },
    );
  }

  const lastUserMessage = incomingMessages[incomingMessages.length - 1];

  if (!lastUserMessage || lastUserMessage.role !== "user") {
    return Response.json(
      {
        error: "A final user message is required.",
      },
      { status: 400 },
    );
  }

  after(async () => {
    await persistMessage({
      chatId: defaultChatId,
      role: "user",
      content: lastUserMessage.content,
    });
  });

  try {
    const result = await streamText({
      model: groq(groqModel),
      messages: incomingMessages,
      experimental_transform: smoothStream({
        chunking: "word",
        delayInMs: 70,
      }),
      onFinish: async (completion) => {
        after(async () => {
          await persistMessage({
            chatId: defaultChatId,
            role: "assistant",
            content: completion.text,
          });
        });
      },
    });

    return result.toTextStreamResponse({
      headers: {
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "Content-Encoding": "none",
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("Groq chat request failed:", error);

    return Response.json(
      {
        error:
          "Groq request failed. Check your `GROQ_API_KEY`, available quota, and the `" +
          groqModel +
          "` model configuration.",
      },
      { status: 502 },
    );
  }
}
