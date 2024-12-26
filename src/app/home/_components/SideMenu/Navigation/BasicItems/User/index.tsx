import UserIcon from "@/icons/UserIcon";
import CreateNewDocument from "./CreateNewDocument";

function User({ name }: { name: string }) {
  const firstLetter = name[0].toUpperCase();

  return (
    <div className=" flex items-center ">
      <button
        type="button"
        className="flex gap-x-1 items-center hover:bg-gray-300 py-1 px-2 rounded-md outline-blue-400"
      >
        <div className="flex justify-center items-center">
          <UserIcon firstLetter={firstLetter} />
        </div>
        <div className=" w-max grow text-start">{name}</div>
      </button>
      <CreateNewDocument />
    </div>
  );
}
export default User;
