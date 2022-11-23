import { Button } from "../component";
export function Signup({ className = 'form', children }) {
  return (
    <form className={className}>
      <div className="form__header">
        <h2 className="form__heading">Create a business account</h2>
        <p>
          You're almost there! Create your new account for{" "}
          <strong>rakshyak1998@gmail.com</strong>
          by completing these details.
        </p>
      </div>
      <input className="fomr-input" type="text" placeholder="Enter your first name" />
      <input className="fomr-input" type="text" placeholder="Enter your last name" />
      <input className="fomr-input" type="text" placeholder="Enter password" />
      <input className="fomr-input" type="text" placeholder="Enter your mobile number" />
      {/* add country selection, time zone, currency, language */}
      <div className="form__footer form__policy ">
        <input type="checkbox" name="terms" id="terms" />
        <p>
          I agree to the <a href="#privacy">Privacy Policy</a>,{" "}
          <a href="#terms-of-services">Terms of Services</a> and{" "}
          <a href="term-of-business">Terms of Business</a>.
        </p>
      </div>
      <Button type="submit" className="btn btn--sign" textContent='Create account' />
    </form>
  );
}
