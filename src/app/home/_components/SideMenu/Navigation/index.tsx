import BasicItems from "./BasicItems";
import CloseMenuCheckbox from "./CloseMenuCheckbox";
import Invite from "./Invite";
import Private from "./Private";
import Settings from "./Settings";
import TeamSpaces from "./TeamSpaces";

const navigationItems = [
  {
    title: null,
    component: <BasicItems />,
  },
  {
    title: "Private",
    component: <Private />,
  },
  {
    title: "Teamspaces",
    component: <TeamSpaces />,
  },
  {
    title: null,
    component: <Settings />,
  },
  {
    title: null,
    component: <Invite />,
  },
];

function Navigation() {
  return (
    <nav className="SideMenu_Aside_Nav flex flex-col ">
      <CloseMenuCheckbox />
      <div className="  h-full flex flex-col justify-between">
        {navigationItems.map((item, index) => (
          <ul key={index}>
            <h2 className=" text-sm font-semibold text-gray-400">
              {item.title}
            </h2>
            {item.component}
          </ul>
        ))}
      </div>
    </nav>
  );
}
export default Navigation;
