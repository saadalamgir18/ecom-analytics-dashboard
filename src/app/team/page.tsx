import TeamList from "@/components/teams/team-list";
import React from "react";
export interface Team {
  id: number | string;
  isAdmin: boolean;
  isApproved: boolean;
  email: string;
  name: string;
  image: string;
}
async function getTeams(): Promise<Team[]> {
  const res = await fetch(`https://67426603e464749900907d2b.mockapi.io/team`, {
    cache: "no-store",
  });
  let data = await res.json();
  data = data.map((member: Team) => ({
    ...member,
    image: member.image.replace("cloudflare-ipfs.com", "ipfs.io"),
  }));

  return data;
}
export default async function page() {
  const data: Team[] = await getTeams();
  return (
    <div className="p-6">
      <TeamList data={data} />
    </div>
  );
}
