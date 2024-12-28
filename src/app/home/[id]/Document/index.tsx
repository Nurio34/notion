import getDocument from "@/actions/getDocument";
import { RoomType } from "@/actions/getRoomsOfOwner";
import Title from "./Title";
import Cover from "./Cover";

async function Document({ room }: { room: RoomType }) {
  const roomId = room.roomId;

  const document = await getDocument(room.roomId);
  const { title } = document;

  return (
    <main className=" grid grid-rows-[auto,1fr] max-h-screen overflow-x-hidden overflow-y-scroll">
      <Cover />
      <div className="px-[20vw] py-[2vh] bg-gradient-to-r from-gray-200 via-white to-gray-200">
        <Title title={title} roomId={roomId} />
      </div>
    </main>
  );
}

export default Document;
