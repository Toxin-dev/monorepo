export function Header({
  className = "header",
  icon,
  logo,
  textContent,
  children,
}) {
  return (
    <header className={className}>
      <span>{icon ?? logo}</span>
      <div className="header__actions">{children}</div>
    </header>
  );
}

export function PageHeading({ title, subTitle }) {
  return (
    <div className="page-heading">
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
}
