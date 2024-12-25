import Back from "@/icons/Back";

function CloseMenuCheckbox() {
  return (
    <label htmlFor="CloseMenuCheckbox" className="md:hidden cursor-pointer">
      <Back />
      <input type="radio" name="MenuToggle" id="CloseMenuCheckbox" hidden />
    </label>
  );
}
export default CloseMenuCheckbox;
