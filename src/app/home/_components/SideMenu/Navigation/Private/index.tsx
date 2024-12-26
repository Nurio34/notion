import { getUserRooms } from "@/actions/getUserRooms";
import GettingStarted from "./GettingStarted";
import Room from "./Room";

async function Private() {
  const rooms = await getUserRooms();

  return (
    <>
      {!Boolean(rooms.length) && <GettingStarted />}
      {rooms.map((room) => (
        <Room key={room.roomId} room={room} />
      ))}
    </>
  );
}
export default Private;
