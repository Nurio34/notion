import Calendar from "./Calendar";
import Help from "./Help";
import SettingsItem from "./SettingsItem";
import Templates from "./Templates";
import Trash from "./Trash";

function Settings() {
  const settingsItems = [
    {
      title: "calendar",
      component: <Calendar />,
    },
    {
      title: "settings",
      component: <SettingsItem />,
    },
    {
      title: "templates",
      component: <Templates />,
    },
    {
      title: "trash",
      component: <Trash />,
    },
    {
      title: "help",
      component: <Help />,
    },
  ];

  return (
    <ul>
      {settingsItems.map((item) => (
        <li key={item.title}>{item.component}</li>
      ))}
    </ul>
  );
}
export default Settings;
