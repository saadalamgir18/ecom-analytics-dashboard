import { Team } from "@/app/team/page";
import React from "react";
import TeamCard from "./team-card";

export default function TeamList({ data }: { data: Team[] }) {
  const approvedMembers = data.filter((member) => member.isApproved);
  const pendingMembers = data.filter((member) => !member.isApproved);
  return (
    <div className="space-y-16">
      <div>
        <h2 className="mb-4">Approved Members</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8">
          {approvedMembers.map((member) => (
            <TeamCard key={member.id} member={member} isPending={false} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="mb-4">Pending Members</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-8">
          {pendingMembers.map((member) => (
            <TeamCard key={member.id} member={member} isPending={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
