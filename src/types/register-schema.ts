import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password is required",
  }),
  name: z
    .string()
    .min(2, { message: "Plese add a name with at least 4 characters" }),
});
