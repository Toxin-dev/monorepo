import { Header } from "../component/index";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
export function Login(props) {
  return (
    <>
      <Header icon={<BiArrowBack size={24} />} />
      <div className="login">
        <form className="login__form">
          <div className="login__header">
            <img
              src="https://picsum.photos/id/600/600/600"
              alt="profile"
              className="login__header__img"
            />
            <div className="login__header__heading">
              <h2>Welcome back to your business account</h2>
              <p>Enter your password to log in as</p>
            </div>
          </div>
          <input type="password" placeholder="Enter your password" />
          <a href="#forget-password">Forget your password?</a>
          <Link to={'/setup'}><button className="btn btn--sign"> Log in</button></Link>
        </form>
      </div>
    </>
  );
}
