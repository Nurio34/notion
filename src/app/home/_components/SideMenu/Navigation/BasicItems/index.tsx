import { currentUser } from "@clerk/nextjs/server";
import User from "./User";
import Search from "./Search";
import NotionAI from "./NotionAI";
import Home from "./Home";
import Inbox from "./Inbox";
import { redirect } from "next/navigation";

async function BasicItems() {
  const user = await currentUser();

  if (!user) return redirect("/");

  const name = user.firstName;

  const basicItems = [
    {
      title: "user",
      component: <User name={name!} />,
    },
    {
      title: "search",
      component: <Search />,
    },
    {
      title: "notion AI",
      component: <NotionAI />,
    },
    {
      title: "home",
      component: <Home />,
    },
    {
      title: "inbox",
      component: <Inbox />,
    },
  ];
  return (
    <ul className="">
      {basicItems.map((item) => (
        <li key={item.title}>{item.component}</li>
      ))}
    </ul>
  );
}
export default BasicItems;
