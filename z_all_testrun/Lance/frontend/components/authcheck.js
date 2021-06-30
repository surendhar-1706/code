import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

import login from "../pages/login";
const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(async () => {
      const accessToken = localStorage.getItem("access_token");
      if (!accessToken) {
        Router.replace("/login");
      } else {
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
          setVerified(true);
        } else {
          // If the token was fraud we first remove it from localStorage and then redirect to "/"
          localStorage.removeItem("accessToken");
          Router.replace("/login");
        }
      }
    }, []);

    if (verified) {
      return <WrappedComponent {...props} />;
    } else {
      return null;
    }
  };
};

export default withAuth;
