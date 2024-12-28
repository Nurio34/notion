import Menu from "@/icons/Menu";

function OpenMenuCheckbox() {
  return (
    <label
      htmlFor="OpenMenuCheckbox"
      className="md:hidden cursor-pointer focus:outline-blue-400"
      tabIndex={0}
      aria-label="open menu"
    >
      <Menu />
      <input type="radio" name="MenuToggle" id="OpenMenuCheckbox" hidden />
    </label>
  );
}
export default OpenMenuCheckbox;
