import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiFillGithub,
} from "react-icons/ai";
import { MdMail } from "react-icons/md";
import { LoginButton } from "./Button";
export function Navbar(props) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <div className="contact-block">
            <MdMail />
            <span className="contact-block__email">rakshak1998@gmail.com</span>
          </div>
          <div className="login-block">
            <div className="social__icons">
              <AiFillFacebook size={18} /> <AiFillGithub size={18} />
              <AiFillGoogleCircle size={18} />
            </div>
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
