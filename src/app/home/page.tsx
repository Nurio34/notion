import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SideMenu from "./_components/SideMenu";
import Main from "./_components/Main";

async function HomePage() {
  const user = await currentUser();

  if (!user) return redirect("/");

  return (
    <div className="grid grid-cols-[auto,1fr]">
      <SideMenu />
      <Main />
    </div>
  );
}
export default HomePage;
