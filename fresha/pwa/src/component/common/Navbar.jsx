import { NavIcon } from "../index";
import {
  IoSettingsOutline,
  IoHappyOutline,
  IoMegaphoneOutline,
  IoStatsChart,
  IoPricetagSharp,
  IoCalendarClearOutline,
  IoHomeOutline,
} from "react-icons/io5";
import React from "react";
import { HiChevronLeft } from "react-icons/hi";
function Navebar({ sideHeading, pageContentList }) {
  return (
    <nav className="navbar">
      <div className="navbar__side open">
        <div className="navbar__side__action-btn">
          <HiChevronLeft />
        </div>
        <h2 className="navbar__side__heading">{sideHeading}</h2>
      </div>
      <div>
        <ul className="navbar__ul">
          <li className="navbar__li">
            <NavIcon icon={<IoHomeOutline />} />
            <NavIcon icon={<IoCalendarClearOutline />} />
            <NavIcon icon={<IoPricetagSharp />} />
            <NavIcon icon={<IoHappyOutline />} />
            <NavIcon icon={<IoMegaphoneOutline />} />
            <NavIcon icon={<IoStatsChart />} />
            <NavIcon icon={<IoSettingsOutline />} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default React.memo(Navebar);
