import React, { useContext } from "react";
import { ProffesionContext, UserContext } from "../App";

function About() {
  const user = useContext(UserContext);
  const proffesion = useContext(ProffesionContext);

  return (
    <div>
      Hello from about
      <br></br>
      {user} - {proffesion}
    </div>
  );
}

export default About;
