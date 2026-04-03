import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="pt-100 flex flex-col items-center space-y-4">
      <div className="bg-amber-500 px-6 py-2 rounded-lg text-black hover:bg-amber-600 transition">
        <SignInButton mode="modal" />
      </div>
      <div className="px-6 py-2 rounded-lg  border border-zinc-700 hover:bg-zinc-100 hover:text-black transition">
        <SignUpButton mode="modal" />
      </div>
    </div>
  );
};

export default page;
