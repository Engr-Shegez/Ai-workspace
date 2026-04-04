import { groq } from "@ai-sdk/groq";
import { streamText } from "ai";
import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { messages: incomingMessages } = await req.json();
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
      { status: 500 }
    );
  }

  // Save user message
  const lastUserMessage = incomingMessages[incomingMessages.length - 1];

  // console.log("inserting messages....");

  await db.insert(messages).values({
    chatId: defaultChatId,
    // chatId: "11111111-1111-1111-1111-111111111111",
    role: "user",
    content: lastUserMessage.content,
  });

  // console.log(" messages inserted....");

  try {
    const result = await streamText({
      model: groq(groqModel),
      messages: incomingMessages,
      onFinish: async (completion) => {
        // Save AI response AFTER streaming
        await db.insert(messages).values({
          chatId: defaultChatId,
          role: "assistant",
          content: completion.text,
        });
      },
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error("Groq chat request failed:", error);

    return Response.json(
      {
        error:
          "Groq request failed. Check your `GROQ_API_KEY`, available quota, and the `" +
          groqModel +
          "` model configuration.",
      },
      { status: 502 }
    );
  }
}
