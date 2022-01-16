import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Dropdown from "./components/Dropdown";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log("useEffect triggered");
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div>
      <Router>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
