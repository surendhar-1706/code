import React, { createContext, useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
export const AuthContext = createContext();
function AuthProvoider({ children }) {
  const [authstate, dispatch] = useReducer(AuthReducer, {
    access: localStorage.getItem("access"),
    refresh: localStorage.getItem("refresh"),
    isAuthenticated: null,
    user: null,
  });
  useEffect(
    (e) => {
      console.log("printing isauthenticated");
      console.log(authstate.isAuthenticated);
      console.log("printing user");
      console.log(authstate.user);
    },
    [authstate]
  );
  return (
    <div>
      <AuthContext.Provider value={{ authstate, dispatch }}>
        {children}
        <p>Hello from Auth Provoider</p>
        <p>isAuthenticated value{authstate.isAuthenticated}</p>
        <p>user value{authstate.user}</p>
      </AuthContext.Provider>
    </div>
  );
}

export default AuthProvoider;
