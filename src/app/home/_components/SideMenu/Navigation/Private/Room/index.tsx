"use client";

import getDocument from "@/actions/getDocument";
import { RoomType } from "@/actions/getRoomsOfOwner";
import FileIcon from "@/icons/FileIcon";
import { DocumentType } from "@/types/document";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Room({ room }: { room: RoomType }) {
  const path = usePathname();
  const currentPath = path.split("/")[2];
  const roomId = room.roomId;

  const [document, setDocument] = useState<DocumentType>({} as DocumentType);

  useEffect(() => {
    const getDocumentAction = async () => {
      const doc = await getDocument(room.roomId);
      setDocument(doc);
    };

    getDocumentAction();
  }, []);

  return (
    <li>
      <Link
        href={`/home/${room.roomId}`}
        className={` transition-all w-full flex  gap-x-1 items-center hover:bg-gray-300 hover:text-black py-1 px-2 rounded-md outline-blue-400
          ${currentPath === roomId ? "bg-neutral text-neutral-content" : ""}
          `}
      >
        <div className=" min-w-5 flex justify-center items-center">
          <FileIcon />
        </div>
        <div className=" w-max grow text-start">{document.title}</div>
      </Link>
    </li>
  );
}
export default Room;
