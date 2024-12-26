import Menu from "@/icons/Menu";

function OpenMenuCheckbox() {
  return (
    <label htmlFor="OpenMenuCheckbox" className="md:hidden cursor-pointer">
      <Menu />
      <input type="radio" name="MenuToggle" id="OpenMenuCheckbox" hidden />
    </label>
  );
}
export default OpenMenuCheckbox;
