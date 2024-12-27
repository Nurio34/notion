import getDocument from "@/actions/getDocument";
import { RoomType } from "@/actions/getRoomsOfOwner";
import Title from "./Title";

async function Document({ room }: { room: RoomType }) {
  const roomId = room.roomId;

  const document = await getDocument(room.roomId);
  const { title } = document;

  return (
    <main>
      <Title title={title} roomId={roomId} />
    </main>
  );
}

export default Document;
