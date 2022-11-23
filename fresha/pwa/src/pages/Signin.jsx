import React from "react";
import { LinkButton, Button } from "../component/index";
import { FaFacebook, FaGoogle } from "react-icons/fa";

export function Signin(props) {
  return (
    <div className={props.className}>
      <form className="form">
        <div className="form__header">
          <h2 className="form__heading">Fresha for business</h2>
          <p>Create an account or log in to manage your Fresha business.</p>
        </div>
        <input
          className="form__input"
          type="tel"
          placeholder="Enter email address"
        />
        <Button textContent="Continue" className="btn btn--sign" />
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
        <div className="form__footer">
          <h3 className="form__footer__heading">
            <strong>Customer booking?</strong>
          </h3>
          <p>
            If you are a customer wishing to book a service{" "}
            <em>sign up as an a customer</em>
          </p>
        </div>
      </form>
    </div>
  );
}
