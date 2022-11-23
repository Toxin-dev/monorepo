import { AiOutlineArrowDown, AiFillPhone } from "react-icons/ai";

export function Nav(props) {
  return (
    <div className={props.className}>
      <nav className="nav">
        <div className="nav__input-group">
          <div className="nav__dropdown">
            <strong>All Categories</strong>
            <AiOutlineArrowDown />
            <span className="nav__seprator"></span>
          </div>
          <input
            className="nav__input"
            type="text"
            placeholder="What do you need?"
          />
          <button className="btn btn__search">SEARCH</button>
        </div>
        <div className="nav__contact">
          <span className="nav__contact__icon">
            <AiFillPhone />
          </span>
          <div className="nav__contact__phone">
            <strong>+65 11.188.888</strong>
            <span>support 24/7 time</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
