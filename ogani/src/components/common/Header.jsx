import { AiFillHeart, AiFillShopping } from "react-icons/ai";
import logo from "../../assets/logo.png";
export function Header(props) {
  return (
    <header className="header container">
      <img className="brand__logo" src={logo} alt="brand logo" />
      <ul className="header__ul">
        <li className="header__li">
          <a href="#home">Home</a>
        </li>
        <li className="header__li">
          <a href="#shop">Shop</a>
        </li>
        <li className="header__li">
          <a href="#blog">Blog</a>
        </li>
        <li className="header__li">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="header__info">
        <span className="header__icons">
          <AiFillHeart color="rgb(28, 28, 28)" size={18} />
          <AiFillShopping color="rgb(28, 28, 28)" size={18} />
        </span>
        <span className="header__price">
          item: <em>$150.00</em>
        </span>
      </div>
    </header>
  );
}
