import propTypes from "prop-types";
import { Link } from "react-router-dom";
export function Button({ className, textContent, onClick, path }) {
  return (
    <Link to={path}>
      <button onClick={onClick} className={className}>
        {true ? textContent : <Loading />}
      </button>{" "}
    </Link>
  );
}

Button.propTypes = {
  textContent: propTypes.string.isRequired,
  path: propTypes.string.isRequired,
};

function Loading() {
  return (
    <div className="loading">
      <span className="circle"></span>
      <span className="circle"></span>
      <span className="circle"></span>
    </div>
  );
}
