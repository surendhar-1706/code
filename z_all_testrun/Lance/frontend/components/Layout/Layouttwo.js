import React, { useContext, useEffect } from "react";
import Navbartwo from "./Navbartwo";
import Footertwo from "./Footertwo";
import { AuthContext } from "../../context/AuthContext";

function Layouttwo({ children }) {
  const { dispatch, authstate } = useContext(AuthContext);
  useEffect((e) => {
    console.log("check dispatched from useEffect");
    if (localStorage.getItem("access_token")) {
      dispatch({
        type: "authenticated",
      });
    }
  }, []);

  return (
    <div>
      <Navbartwo />
      {children}
      <Footertwo />
    </div>
  );
}

export default Layouttwo;
