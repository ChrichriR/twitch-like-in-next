import Main from "./Main";
import SideMenu from "./SideMenu";

export default function Layout() {
  return (
    <div className="pt-[60px] flex w-full">
      <SideMenu />
      <Main />
    </div>
  );
}
