import { SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

function SigninButton() {
  return (
    <div className=" font-semibold py-1 px-3 rounded-md transition-all hover:bg-gray-200">
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
}

export default SigninButton;
