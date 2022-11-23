export function Avatar({ size, img }) {
  return (
    <img
      src={img ?? "https://source.unsplash.com/random?person"}
      alt="user"
      className="profile__avatar"
      width={size}
      height={size}
    />
  );
}
