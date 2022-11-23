import propTypes from "prop-types";
export function LinkButton({ textContent, icon, className = "btn--link" }) {
  return (
    <a href="#facebook" className={className}>
      <span className="btn--link__icon">{icon ?? icon}</span>
      <span className="btn--link__textContent">{textContent}</span>
    </a>
  );
}

LinkButton.propType = {
  icon: propTypes.string,
  textContent: propTypes.string.isRequired,
};
