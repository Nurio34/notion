"use client";

import HomeIcon from "@/icons/HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Home() {
  const path = usePathname();
  const currentPath = path.split("/")[2];

  return (
    <Link
      href={`/home`}
      className={`transition-all w-full flex  gap-x-1 items-center hover:bg-gray-300 hover:text-black py-1 px-2 rounded-md outline-blue-400
        ${!currentPath ? "bg-neutral text-neutral-content" : ""}
        `}
    >
      <div className=" min-w-5 flex justify-center items-center">
        <HomeIcon />
      </div>
      <div className=" w-max grow text-start">Home</div>
    </Link>
  );
}
export default Home;
