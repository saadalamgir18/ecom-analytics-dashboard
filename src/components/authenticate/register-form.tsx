"use client";
import { RegisterSchema } from "@/types/register-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import AuthCard from "./auth-card";
import { useState } from "react";
import { RegisterAccount } from "@/server/actions/register";
import { useAction } from "next-safe-action/hooks";
import FormError from "./form-error";
export default function RegisterForm() {
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { execute } = useAction(RegisterAccount, {
    onSuccess(data) {
      if (data.data?.error) {
        setError(data.data?.error);
      }
    },
  });
  const onSubmit = (value: z.infer<typeof RegisterSchema>) => {
    execute(value);
    setError("");
  };
  return (
    <>
      <AuthCard
        title="Register for an account"
        backButtonHref="/login"
        backButtonLabel="already have an account?"
      >
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Saad" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="saad@example.com"
                          type="text"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="*****" type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message={error} />
              </div>
              <Button type="submit" className="w-full mt-6">
                Register
              </Button>
            </form>
          </Form>
        </div>
      </AuthCard>
    </>
  );
}
