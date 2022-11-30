import { useContext, useReducer } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext({ checkLogin: "login" });

export function AuthProvider({ userData, children }) {
  let { user, setUser } = useState(userData)
  user = typeof user === 'string' ? JSON.parse(user) : user;
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);