import { Button, LinkButton } from "../component";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useState } from "react";
export function Verify() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  function handleChange({ target: { value: email } }) {
    setEmail(email);
    setError(false);
  }
  function handleClick({ target: { value } }) {
    if (value === "") setError(true);
  }
  return (
    <form className="form">
      <div className="form__header">
        <h2 className="form__heading">Fresha for business</h2>
        <p>Create an account or log in to manage your Fresha business.</p>
      </div>
      <input
        className="form__input"
        type="tel"
        placeholder="Enter email address"
        value={email}
        onChange={handleChange}
      />
      {error && (
        <p style={{ color: "tomato", fontSize: "1.4rem" }}>
          Please enter email address.
        </p>
      )}
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleClick(e);
        }}
        path="/sign-in"
        textContent="Continue"
        className="btn btn--sign"
      />
      <span className="seprator">OR</span>
      <LinkButton
        textContent="Continue with Facebook"
        className="btn btn--link"
        icon={<FaFacebook color="rgb(0, 122, 248)" />}
      />
      <LinkButton
        textContent="Continue with Google"
        className="btn btn--link"
        icon={<FaGoogle fill="rgb(235, 67, 52)" />}
      />
    </form>
  );
}
