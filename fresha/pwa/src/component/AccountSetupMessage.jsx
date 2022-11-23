import { HiX } from "react-icons/hi";
export function AccountSetupMessage({
  className = "card account-setup account-setup--message",
  title,
  subTitle,
}) {
  return (
    <div className={className}>
      <div className="card__content">
        <h2 className="account-setup__heading">{title}</h2>
        <p className="account-setup__subtitle">{subTitle}</p>
        <button className="btn btn--border account-setup__btn">
          Start Now
        </button>
      </div>
      <HiX className="account-setup__cancle-icon"/>
    </div>
  );
}
