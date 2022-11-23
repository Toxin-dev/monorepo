import propTypes from "prop-types";
export function Button({className,textContent}) {
  return <button className={className}>{textContent}</button>;
}

Button.prototype = {
  textContent: propTypes.string.isRequired,
};
