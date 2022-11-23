import { Header } from "../component/index";
import { BiArrowBack } from "react-icons/bi";
export function Login(props) {
  return (
    <>
      <Header icon={<BiArrowBack size={24} />} />
      <div className="login">
        <form className="login__form">
          <div className="login__header">
            <img
              src="https://source.unsplash.com/random?person"
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
          <button className="btn btn--sign"> Log in</button>
        </form>
      </div>
    </>
  );
}
