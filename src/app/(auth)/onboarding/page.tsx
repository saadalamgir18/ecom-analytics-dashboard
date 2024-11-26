import OnBoardingForm from "@/components/authenticate/OnBoardingForm";
import { auth } from "@/server/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex justify-center items-center h-screen w-full p-6">
      <OnBoardingForm session={session} />
    </div>
  );
}
