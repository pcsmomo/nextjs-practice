import bcrypt from "bcrypt";

// import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";

import { LoginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

// Notice this is only an object, not a full Auth.js instance
export default {
  // providers: [GitHub],
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email, password } = validatedFields.data;

        const user = await getUserByEmail(email);
        if (
          !user ||
          !user.password // if user craeted with social login
        ) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;
