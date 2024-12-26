import Back from "@/icons/Back";

function CloseMenuCheckbox() {
  return (
    <label htmlFor="CloseMenuCheckbox" className="md:hidden cursor-pointer p-4">
      <Back />
      <input type="radio" name="MenuToggle" id="CloseMenuCheckbox" hidden />
    </label>
  );
}
export default CloseMenuCheckbox;
