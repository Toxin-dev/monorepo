import {
  IoNotificationsOutline,
  IoRocketOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Header, Avatar} from "../index";
import Navebar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Header logo={"Fresha"}>
        {/* action */}
        <IoSearchOutline />
        <IoRocketOutline />
        <IoNotificationsOutline />
        {/* profile pic */}
        <Avatar size={42} />
      </Header>
      <div className="content">
        <Navebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
