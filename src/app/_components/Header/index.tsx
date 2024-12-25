import NotionIcon from "@/icons/Notion";
import Navigation from "./_components/Navigation";
import RequestDemoButton from "./_components/RequestDemoButton";
import GetNotionButton from "./_components/GetNotionButton";
import SigninButton from "./_components/SigninButton";

function Header() {
  return (
    <header className="flex items-center py-[2vh] px-[2vh]">
      <NotionIcon className={"mr-[2vw]"} />
      <Navigation />
      <div className=" flex items-center gap-[1vw] ml-auto">
        <RequestDemoButton />
        <span className=" w-[2px] h-6 bg-gray-200"></span>
        <SigninButton />
        <GetNotionButton />
      </div>
    </header>
  );
}

export default Header;
