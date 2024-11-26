import LoginForm from "@/components/authenticate/login-form";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen w-full p-6">
      <LoginForm />
    </div>
  );
}
