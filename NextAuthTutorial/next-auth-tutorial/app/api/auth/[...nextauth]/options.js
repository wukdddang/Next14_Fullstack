import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile Github: ", profile);

        let userRole = "user";
        if (profile?.email === "dnr8874@naver.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole,
        };
      },

      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Profile Google: ", profile);

        return {
          ...profile,
          id: profile.sub,
          role: userRole,
        };
      },

      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    // 로그인 성공 시 호출됩니다.
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },

    // 클라이언트 측에서 세션을 요청할 때마다 호출됩니다.
    async session({ session, token }) {
      if (session) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
