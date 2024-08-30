import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  // when registering, we can add more constraints here
  // but for login, we just need to check if it's a string
  password: z.string().min(1, {
    message: "Password is required",
  }),
});
