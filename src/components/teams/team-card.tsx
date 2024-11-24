import { Team } from "@/app/team/page";
import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
interface TeamCardProps {
  member: Team;
  isPending: boolean;
}
export default function TeamCard({ member, isPending }: TeamCardProps) {
  return (
    <Card className="dark:bg-tertiary  bg-slate-100 flex flex-col justify-between items-center overflow-hidden rounded-lg p-4 gap-4">
      <Image
        src={member.image}
        alt="image"
        width={100}
        height={100}
        className="rounded-full"
      />
      <h2 className="text-center">{member.name}</h2>
      <div>{member.isAdmin ? "Admin" : ""}</div>
      <div className="flex items-center gap-2">
        {isPending ? (
          <>
            <Button>Approve</Button>
            <Button variant="destructive">Decline</Button>
          </>
        ) : (
          <>
            <Button>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </>
        )}
      </div>
    </Card>
  );
}
