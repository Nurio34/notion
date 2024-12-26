import HomeIcon from "@/icons/HomeIcon";
import Link from "next/link";

function Home() {
  return (
    <Link
      href={`/home`}
      className="w-full flex  gap-x-1 items-center hover:bg-gray-300 py-1 px-2 rounded-md outline-blue-400"
    >
      <div className=" min-w-5 flex justify-center items-center">
        <HomeIcon />
      </div>
      <div className=" w-max grow text-start">Home</div>
    </Link>
  );
}
export default Home;
