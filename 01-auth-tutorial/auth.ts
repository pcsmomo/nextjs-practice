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
  adapter: PrismaAdapter(db),
  // database session strategy doesn't work with Edge yet.
  // so we choose jwt for now.
  session: { strategy: "jwt" },
  ...authConfig,
});
