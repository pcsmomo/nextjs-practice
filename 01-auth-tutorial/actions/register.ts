"use server";

import * as z from "zod";

import { RegisterSchema } from "@/schemas";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  // wait for 2 seconds
  await sleep(2000);

  return { success: "Email sent!" };
};
