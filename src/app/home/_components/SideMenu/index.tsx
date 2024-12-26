import "./index.css";
import Navigation from "./Navigation";
import OpenMenuCheckbox from "./OpenMenuCheckbox";

function SideMenu() {
  return (
    <aside className="SideMenu_Aside relative h-screen max-h-screen overflow-y-clip bg-gray-200 py-[1vh] px-[2vw]">
      <Navigation />
      <OpenMenuCheckbox />
    </aside>
  );
}
export default SideMenu;
