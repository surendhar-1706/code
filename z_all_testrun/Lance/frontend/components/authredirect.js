import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import login from "../pages/login";
import { AuthContext } from "../context/AuthContext";
import Empty from "./empty";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const { authstate, dispatch } = useContext(AuthContext);
    const Router = useRouter();
    const [access, setaccess] = useState("cool");
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem("access_token");
      setaccess(accessToken);
      if (authstate.isAuthenticated && accessToken) {
        console.log("has authstate and token");
        Router.push("/");
      }
      // else if (!authstate.isAuthenticated && !accessToken) {
      //   Router.replace("/login");
      // }
      else if (accessToken) {
        const fetched_data = await fetch(
          "http://localhost:8000/auth/jwt/verify",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              token: accessToken,
            }),
          }
        );
        const json_data = await fetched_data.json();
        // if token was verified we set the state.
        if (json_data.code !== "token_not_valid") {
          console.log("in a place verifying token");
          console.log("authstate.isauthenticated", authstate.isAuthenticated);
          setVerified(true);
          Router.replace("/");
        } else if (authstate.isAuthenticated && !accessToken) {
          dispatch({
            type: "logout",
          });
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem("access_token");
          Router.replace("/login");
        }
      }
    }, []);

    if (authstate.isAuthenticated) {
      return null;
    } else if (access && !verified) {
      return null;
    } else if (access && verified) {
      return null;
    } else if (!access && !verified) {
      return <WrappedComponent {...props} />;
    }
  };
};

export default withAuth;
