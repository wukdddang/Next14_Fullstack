import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // console.log(req);
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.role);
    console.log(req.nextUrl.pathname.startsWith("/CreateUser"));

    if (
      req.nextUrl.pathname.startsWith("/CreateUser") &&
      req.nextauth.token.role !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
  },
  {
    callbacks: {
      authroized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/CreateUser"] };
