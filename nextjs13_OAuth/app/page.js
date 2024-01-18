"use client";

import UserInfo from "@/components/UserInfo";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);

  return (
    <div className="grid place-items-center h-screen -mt-24">
      <UserInfo />
    </div>
  );
}
