export function Setup({
  className = "setup-box",
  heading,
  subHeading,
  children,
}) {
  return (
    <div className={className}>
      <div className="setup-side__left">
        <h2 className="setup-box__heading">{heading}</h2>
        <p className="setup-box__subHeading">{subHeading}</p>
      </div>
      <div className="setup-side__right">
        <div className="card">{children}</div>
      </div>
    </div>
  );
}
