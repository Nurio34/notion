import { getRoomsOfOwner } from "@/actions/getRoomsOfOwner";
import Room from "./Room";
import { User } from "@clerk/nextjs/server";
import GettingStarted from "./GettingStarted";

async function Private({ user }: { user: User }) {
  const email = user.emailAddresses[0].emailAddress;

  const rooms = await getRoomsOfOwner(email);

  return (
    <ul
      className="max-h-[113.60px] md:max-h-[154.93px] overflow-y-scroll mt-1 p-1 space-y-[2px]"
      style={{ scrollbarWidth: "none" }}
    >
      {!Boolean(rooms.length) && <GettingStarted />}
      {rooms.map((room) => (
        <Room key={room.roomId} rooms={rooms} room={room} />
      ))}
    </ul>
  );
}
export default Private;
