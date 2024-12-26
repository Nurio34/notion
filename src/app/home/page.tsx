import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Main from "./_components/Main";
async function HomePage() {
  const user = await currentUser();

  if (!user) return redirect("/");

  return <Main />;
}
export default HomePage;
