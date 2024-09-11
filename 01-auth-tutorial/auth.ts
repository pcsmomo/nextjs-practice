import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async session({ token, session }) {
      console.log({ sessionToken: token, session });

      if (token.sub && session.user) {
        // session.user.customField = token.customField;
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user, account, profile, session, trigger }) {
      // token.customField = "test";
      console.log({ token });
      return token;
    },
  },
  adapter: PrismaAdapter(db),
  // database session strategy doesn't work with Edge yet.
  // so we choose jwt for now.
  session: { strategy: "jwt" },
  ...authConfig,
});
