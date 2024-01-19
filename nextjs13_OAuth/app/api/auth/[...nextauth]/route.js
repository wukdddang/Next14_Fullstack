import { connectMongoDB } from "@/lib/mongodb";
import clientPromise from "@/lib/mongodb-adapter";
import User from "@/models/user";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "nextjs13_OAuth",
  }),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    // jwt: true,
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async session({ session, user }) {
      // console.log("Session: ", session);
      // console.log("Token: ", token);
      // console.log("User: ", user);
      // session.accessToken = token.accessToken;
      session.user = user;
      return session;
    },
  },
  // jwt: {

  // }
  // callbacks: {
  //   async signIn({ user, account }) {
  //     console.log("User: ", user);
  //     console.log("Account: ", account);

  //     if (account.provider === "google") {
  //       const { name, email } = user;
  //       try {
  //         await connectMongoDB();
  //         const userExists = await User.findOne({ email });

  //         if (!userExists) {
  //           const res = await fetch("http://localhost:3000/api/user", {
  //             method: "POST",
  //             headers: {
  //               "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               name,
  //               email,
  //             }),
  //           });

  //           if (res.ok) {
  //             return user;
  //           }
  //         }
  //       } catch (error) {
  //         console.log("Error: ", error);
  //       }
  //     }

  //     return user;
  //   },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, handler as auth };
