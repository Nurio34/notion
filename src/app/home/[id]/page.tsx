import getRoom from "@/actions/getRoom";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Document from "./Document";

async function Page({ params }: { params: Promise<{ id: string }> }) {
  const user = await currentUser();
  if (!user) redirect("/");
  const email = user.emailAddresses[0].emailAddress;

  const paramsConstant = await params;
  const id = paramsConstant.id;

  const room = await getRoom(email, id);

  if (!room) return redirect("/home");

  return <Document room={room} />;
}
export default Page;
