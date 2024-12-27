import { User } from "@clerk/nextjs/server";
import BasicItems from "./BasicItems";
import CloseMenuCheckbox from "./CloseMenuCheckbox";
import Invite from "./Invite";
import Private from "./Private";
import Settings from "./Settings";
import TeamSpaces from "./TeamSpaces";

function Navigation({ user }: { user: User }) {
  const navigationItems = [
    {
      title: null,
      component: <BasicItems />,
    },
    {
      title: "Private",
      component: <Private user={user} />,
    },
    {
      title: "Teamspaces",
      component: <TeamSpaces user={user} />,
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

  return (
    <nav className="SideMenu_Aside_Nav flex flex-col ">
      <CloseMenuCheckbox />
      <div className="  h-full flex flex-col gap-y-[1vh] justify-between">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`${
              item.title === "Private"
                ? "grow max-h-[133.60px] md:max-h-[174.93px] "
                : ""
            }${
              item.title === "Teamspaces"
                ? "grow max-h-[101.60px] md:max-h-[166.93px] "
                : ""
            }`}
            style={{ scrollbarWidth: "none" }}
          >
            <h2 className=" text-sm font-semibold text-gray-400">
              {item.title}
            </h2>
            {item.component}
          </div>
        ))}
      </div>
    </nav>
  );
}
export default Navigation;
