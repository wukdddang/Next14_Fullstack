"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

function SignInButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/google-logo.png" height={30} width={30} />
      <span className="bg-blue-500 text-white py-3 px-4">
        Sign in with Google
      </span>
    </button>
  );
}

export default SignInButton;
