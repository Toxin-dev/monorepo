import {
  IoNotificationsOutline,
  IoRocketOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { Header, Avatar, PageHeading } from "../index";
import Navebar from "./Navbar";

export default function Layout({ children, pageHeading, subTitle }) {
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
          <PageHeading title={pageHeading} subTitle={subTitle} />
          {children}
        </div>
      </div>
    </div>
  );
}
