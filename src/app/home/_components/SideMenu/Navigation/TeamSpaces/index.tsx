import { getRoomsOfEditor } from "@/actions/getRoomsOfEditor";
import { User } from "@clerk/nextjs/server";
import Room from "../Private/Room";

async function TeamSpaces({ user }: { user: User }) {
  const email = user.emailAddresses[0].emailAddress;

  const rooms = await getRoomsOfEditor(email);

  return (
    <ul
      className="max-h-[81.60px] md:max-h-[146.93px] overflow-y-scroll mt-1 p-1"
      style={{ scrollbarWidth: "none" }}
    >
      {rooms.map((room) => (
        <Room key={room.roomId} room={room} />
      ))}
    </ul>
  );
}
export default TeamSpaces;
