import { RoomType } from "@/actions/getUserRooms";
import FileIcon from "@/icons/FileIcon";
import Link from "next/link";

function Room({ room }: { room: RoomType }) {
  return (
    <li>
      <Link
        href={`/home/${room.roomId}`}
        className="w-full flex  gap-x-1 items-center hover:bg-gray-300 py-1 px-2 rounded-md outline-blue-400"
      >
        <div className=" min-w-5 flex justify-center items-center">
          <FileIcon />
        </div>
        <div className=" w-max grow text-start">{room.roomId}</div>
      </Link>{" "}
    </li>
  );
}
export default Room;
