import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Verify } from "./Verify";
export function Signin(props) {
  const [emailVerifyed, setIsEmailVerifyed] = useState(false);
  return (
    <div className={props.className}>
      {emailVerifyed ? <Outlet /> : <Verify />}
    </div>
  );
}
