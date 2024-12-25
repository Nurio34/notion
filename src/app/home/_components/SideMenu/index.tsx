import "./index.css";
import Navigation from "./_components/Navigation";
import OpenMenuCheckbox from "./_components/OpenMenuCheckbox";

function SideMenu() {
  return (
    <aside className="SideMenu_Aside relative h-screen max-h-screen overflow-y-clip bg-gray-200 py-[1vh] px-[2vw]">
      <Navigation />
      <OpenMenuCheckbox />
    </aside>
  );
}
export default SideMenu;
