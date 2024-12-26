import TrashIcon from "@/icons/TrashIcon";

function Trash() {
  return (
    <button
      type="button"
      className="w-full flex  gap-x-1 items-center hover:bg-gray-300 py-1 px-2 rounded-md outline-blue-400"
    >
      <div className=" min-w-5 flex justify-center items-center">
        <TrashIcon />
      </div>
      <div className=" w-max grow text-start">Trash</div>
    </button>
  );
}
export default Trash;
