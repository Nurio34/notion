import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Header() {
  const user = await currentUser();

  if (!user) return redirect("/");

  const firstName = user.firstName;

  return (
    <header className=" pt-[10vh] text-center text-3xl font-semibold">
      Good morning, {firstName}
    </header>
  );
}
export default Header;
