import { Link } from "react-router-dom";

export function Avatar({ size, img }) {
  return (
    <Link to={'/profile'}>
      <img
        src={img ?? "https://picsum.photos/300/300"}
        alt="user"
        className="profile__avatar"
        width={size}
        height={size}
      />
    </Link>
  );
}
