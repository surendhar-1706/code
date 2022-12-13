import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer>
          <div>one</div>
        </ParallaxLayer>
        <ParallaxLayer>
          <div>two</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
