import propTypes from "prop-types";
export function Button({ className, textContent, onClick }) {
  return <button onClick={onClick} className={className}>{true ? textContent : <Loading />} </button>;
}

Button.prototype = {
  textContent: propTypes.string.isRequired,
};


function Loading() {
  return <div className="loading">
    <span className="circle"></span><span className="circle"></span><span className="circle"></span></div>
}