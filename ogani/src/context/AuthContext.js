import { createContext, useContext, useState } from "react";
const Provider = createContext({});

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();

  function signinHandler() {
    // get request for registered user.
  }
  function signUpHandler() {
    // post request to create new user.
    console.log(user);
  }
  return (
    <Provider.Provider value={{ setUser, signUpHandler, signinHandler }}>
      {children}
    </Provider.Provider>
  );
}

// custom auth hook
export const useAuth = () => useContext(Provider);
