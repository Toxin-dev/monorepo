import { useContext } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const Auth = createContext({ checkLogin: "login" });
const TIMEOUT = "4000";
export function Authcontext(props) {
  function loginHandler(state) {
    if (state.isLogin) toast.success("Welcome", { autoClose: TIMEOUT });
    if (!state.isLogin)
      toast.error("Pelase check your email", { autoClose: TIMEOUT });
  }
  return (
    <Auth.Provider value={{ checkLogin: loginHandler }}>
      {props.children}
    </Auth.Provider>
  );
}

export const useAuth = () => useContext(Auth);