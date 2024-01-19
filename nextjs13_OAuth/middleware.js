// app/_middleware.ts
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
// import { cookies } from "next/headers";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./app/api/auth/[...nextauth]/route";

export async function middleware(req) {
  // console.log(req);
  console.log(req);
  const session = await getSession({ req });
  console.log(session);
  // console.log(session);
  // const cookieStore = cookies();
  // console.log(cookieStore);
  // console.log(cookieStore.get("next-auth.session-token"));
  // console.log(req);
  // console.log(req);
  // const session = await getServerSession(authOptions);
  // const session = await getSession();
  // console.log(session);

  // 세션이 없다면 로그인 페이지로 리디렉션
  // if (!session) {
  //   return NextResponse.redirect(new URL("/profile", req.url));
  // }

  return NextResponse.next();
}
