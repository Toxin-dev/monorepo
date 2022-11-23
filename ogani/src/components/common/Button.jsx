import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

export function LoginButton(props) {
  const [showModal, setShowModal] = useState(false);
  function handleClick(event) {
    setShowModal(!showModal);
  }
  return (
    <button className="btn login__btn" onClick={handleClick}>
      <AiOutlineUser />
      Login
    </button>
  );
}
