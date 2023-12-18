import * as React from "react";
import Nav from "@/components/Navlogged";
import NavBar from "@/components/Navnotlogged";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return <>{!session ? <Nav /> : <NavBar />}</>;
  return <NavBar />;
}
