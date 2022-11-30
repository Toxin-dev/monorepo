import { Link } from "react-router-dom";

export function Avatar({ size, img }) {
  return (
    <Link to={'/profile'}>
      <img
        src={img ?? "https://source.unsplash.com/random?person"}
        alt="user"
        className="profile__avatar"
        width={size}
        height={size}
      />
    </Link>
  );
}
