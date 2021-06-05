import React, { useContext } from "react";
import { ProffesionContext, UserContext } from "../App";

function Home() {
  const user = useContext(UserContext);
  const proffesion = useContext(ProffesionContext);

  return (
    <div>
      Hello from home
      {user} - {proffesion}
    </div>
  );
}

export default Home;
