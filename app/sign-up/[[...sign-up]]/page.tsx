import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-950">
      <SignUp
        appearance={{
          elements: {
            card: "bg-zinc-900 border border-zinc-800 shadow-xl",
          },
        }}
      />
    </div>
  );
};

export default Page;
