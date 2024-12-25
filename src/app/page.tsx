import { currentUser } from "@clerk/nextjs/server";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return (
      <div className="w-full h-screen max-h-screen overflow-hidden grid grid-rows-[auto,1fr]">
        <Header />
        <Hero />
      </div>
    );
  }

  redirect("/home");
}
