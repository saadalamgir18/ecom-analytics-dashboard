import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(8, {
    message: "Password must be atleast 8 characters",
  }),
  // name: z
  //   .string()
  //   .min(2, { message: "Please add a name with atleast 4 characters" }),
});
