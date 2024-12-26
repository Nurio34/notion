import { getUserRooms } from "@/actions/getUserRooms";
import { currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";

async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<string>;
}) {
  const user = await currentUser();

  if (!user) redirect("/");

  const paramsConstant = await params;
  const searchParamsConstant = await searchParams;

  const rooms = await getUserRooms();

  const isValidParam = rooms.some((room) => room.roomId === paramsConstant.id);

  if (!isValidParam) notFound();

  console.log({ paramsConstant, searchParamsConstant });

  return <div>Page</div>;
}
export default Page;
