import Back from "@/icons/Back";

function CloseMenuCheckbox() {
  return (
    <label
      htmlFor="CloseMenuCheckbox"
      className="md:hidden cursor-pointer p-4 max-w-max focus:outline-blue-400"
      tabIndex={0}
      aria-label="close menu"
    >
      <Back />
      <input type="radio" name="MenuToggle" id="CloseMenuCheckbox" hidden />
    </label>
  );
}
export default CloseMenuCheckbox;
