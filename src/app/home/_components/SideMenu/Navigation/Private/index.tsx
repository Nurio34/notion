import { getRoomsOfOwner } from "@/actions/getRoomsOfOwner";
import Room from "./Room";
import { User } from "@clerk/nextjs/server";
import { createGettingStartedDocument } from "@/actions/createGettingStartedDocument";
import { revalidatePath } from "next/cache";

async function Private({ user }: { user: User }) {
  const email = user.emailAddresses[0].emailAddress;

  const rooms = await getRoomsOfOwner(email);

  if (!Boolean(rooms.length)) {
    await createGettingStartedDocument();
    revalidatePath("/home");
    return <ul></ul>;
  }

  return (
    <ul
      className="max-h-[113.60px] md:max-h-[154.93px] overflow-y-scroll mt-1 p-1"
      style={{ scrollbarWidth: "none" }}
    >
      {rooms.map((room) => (
        <Room key={room.roomId} room={room} />
      ))}
    </ul>
  );
}
export default Private;
