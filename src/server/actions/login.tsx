"use server";

import { actionClient } from "@/lib/safe-action";
import { LoginSchema } from "@/types/login-schema";
import { db } from "../db";
import { signIn } from "../auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";

export const LoginAccount = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    try {
      const existinguser = await db.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!existinguser) return { error: "Email not found" };
      //   if (!existinguser.isApproved) {
      //     return { error: "Not approved from admin" };
      //   }

      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (existinguser.image === "no-image") {
        return redirect("/onboarding");
      } else {
        return redirect("/");
      }
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Email or password is incorrect" };
          case "AccessDenied":
            return { error: error.message };
        }
      }
      throw error;
    }
  });
revalidatePath("/");
