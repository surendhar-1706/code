import React, { createContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router-dom";
import { AuthReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();
function AuthContextProvider({ children }) {
  // const history = useHistory();
  const [authstate, dispatch] = useReducer(AuthReducer, {
    isAuthenticated: false,
    access: localStorage.getItem("access_token"),
    refresh: localStorage.getItem("refresh_toknen"),
  });
  useEffect(() => {
    // console.log(authstate.access);
    // // console.log("nice");
    // // if (authstate.isAuthenticated) {
    // //   history.push("/");
    // // }
  }, [authstate]);

  return (
    <div>
      <AuthContext.Provider value={{ authstate, dispatch }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export default AuthContextProvider;
