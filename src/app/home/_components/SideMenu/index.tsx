import { User } from "@clerk/nextjs/server";
import "./index.css";
import Navigation from "./Navigation";
import OpenMenuCheckbox from "./OpenMenuCheckbox";

function SideMenu({ user }: { user: User }) {
  return (
    <aside className="SideMenu_Aside relative h-screen max-h-screen overflow-y-clip bg-gray-100 py-[1vh] px-[2vw]">
      <Navigation user={user} />
      <OpenMenuCheckbox />
    </aside>
  );
}
export default SideMenu;
