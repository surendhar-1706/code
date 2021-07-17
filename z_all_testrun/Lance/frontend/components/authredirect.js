import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
const Authredirect = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [access, setaccess] = useState("cool");
    const [verified, setVerified] = useState(false);
    const { authstate, dispatch } = useContext(AuthContext);
    const [auth, setauth] = useState(null);
    useEffect(async () => {
      const accessToken = localStorage.getItem("access_token");
      setaccess(accessToken);
      console.log(authstate, "printing authstate from auth redirect");
      console.log("printng access token", accessToken);
      if (accessToken && authstate.isAuthenticated) {
        console.log("has authstate and token from auth redirect");
        Router.push("/post");
      }
      // else if (!authstate.isAuthenticated && !accessToken) {
      //   Router.replace("/login");
      // }
      else if (accessToken) {
        const fetched_data = await fetch(
          "http://localhost:8000/auth/token/verify/",
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
          Router.replace("/post");
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
    if (!access && !verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default Authredirect;
