"use server";

import * as z from "zod";

import { LoginSchema } from "@/schemas";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  // wait for 2 seconds
  await sleep(2000);

  return { success: "Email sent!" };
};
