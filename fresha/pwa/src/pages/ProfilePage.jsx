import { FaCamera, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Layout from "../component/common/Layout";
import { Avatar, Setup } from "../component/index";

export function ProfilePage({ profileDetails = {} }) {
  return (
    <Layout pageHeading={"My Settings"}>
      <div className="profile-setting">
        <div className="profile-setting__personal-details">
          {/* personal detail */}
          <Setup
            className="setup-box profile"
            heading={"Personal details"}
            subHeading={
              "Set your name and contact info here. The email address enteredhere is used for your login access."
            }
          >
            <div className="setup-box__profile-img">
              <Avatar size={176} />
              <div className="setup-box__profile-img--edit">
                <FaCamera />
              </div>
            </div>
            <div className="input-group">
              <input type="text" placeholder="Enter your first name" />
              <input type="text" placeholder="Enter your last name" />
            </div>
            <input type="tel" placeholder="Enter your phone number" />
            <input type="email" placeholder="Enter your email address" />
          </Setup>
          {/* change password */}
          <Setup
            heading={"Change password"}
            subHeading={
              "To make an update, enter your existing password followed by new one."
            }
          >
            <div className="setup-box__change-password">
              <input
                type="password"
                placeholder="Please type your current password"
              />
              <input type="password" placeholder="Please type your password" />
              <input
                type="password"
                placeholder="Please re-type your password"
              />
            </div>
          </Setup>
          {/* Socal account */}
          <Setup
            heading={"Social accounts"}
            subHeading={
              "Sign up faster to your Fresha account by linking it to Facebook or Google"
            }
          >
            <div className="setup-box__social-account">
              <SocialIcon
                icon={<FaGoogle color="rgb(235, 67, 52)" />}
                name="google"
              />
              <SocialIcon
                icon={<FaFacebook color="rgb(0, 122, 248)" />}
                name="facebook"
              />
            </div>
          </Setup>
          {/* notification setting */}
          <Setup
            heading={"My notification settings"}
            subHeading={
              "Receive notifications about important activity in your account"
            }
          />
          {/* calendar settings */}
          <Setup
            heading={"My calendar syncing"}
            subHeading={"Sync up your Fresha calendar with external calendars"}
          />
          {/* delete account */}
          <Setup
            heading={"Delete account"}
            subHeading={
              "You will delete all your personal info and won't be able to retrieve it"
            }
          >
            <div className="setup-box__delete-account">
              <a href="#delete-account" className="link--delete">
                Delete my Fresha account
              </a>
            </div>
          </Setup>
          <footer className="setup-box__footer">
            <Link to={'/'}><button className="btn btn--logout">Logout</button></Link>
            <button className="btn btn--save">Save</button>
          </footer>
        </div>
      </div>
    </Layout>
  );
}
function SocialIcon({ icon, name, isConnected, btnTextContent }) {
  return (
    <div className="social-icon">
      {icon}
      <div className="states">
        <div className="name">{name}</div>
        <div className="status">
          {isConnected ? "Connected" : "Not connected"}
        </div>
      </div>
      <button className="btn btn--border">Connect</button>
    </div>
  );
}
