import HelpIcon from "@/icons/HelpIcon";

function Help() {
  return (
    <button
      type="button"
      className="w-full flex  gap-x-1 items-center hover:bg-gray-300 py-1 px-2 rounded-md outline-blue-400"
    >
      <div className=" min-w-5 flex justify-center items-center">
        <HelpIcon />
      </div>
      <div className=" w-max grow text-start">Help</div>
    </button>
  );
}
export default Help;
