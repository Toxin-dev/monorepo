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
import { Link } from "react-router-dom";
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
            <Link to="/home">
              <NavIcon icon={<IoHomeOutline />} />
            </Link>
            <NavIcon icon={<IoCalendarClearOutline />} />
            <NavIcon icon={<IoPricetagSharp />} />
            <Link to={'/client'}>
              <NavIcon icon={<IoHappyOutline />} />
            </Link>
            <NavIcon icon={<IoMegaphoneOutline />} />
            <NavIcon icon={<IoStatsChart />} />
            <Link to={'/setup'}>
              <NavIcon icon={<IoSettingsOutline />} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default React.memo(Navebar);
