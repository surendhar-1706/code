import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";
import login from "../pages/login";
import withAuth from "../components/authcheck";
function Layout({ children }) {
  const router = useRouter();
  const { dispatch, authstate } = useContext(AuthContext);

  useEffect((e) => {
    console.log("check dispatched from useEffect");
    if (localStorage.getItem("access_token")) {
      dispatch({
        type: "authenticated",
      });
    }
  }, []);

  return <div>{children}</div>;
}

export default Layout;
