import React, { createContext, useReducer } from "react";
import SecondCounter from "./components/SecondCounter";
import UseReducer_todo from "./components/UseReducer_todo";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
export const UserContext = createContext();
export const ProffesionContext = createContext();
function App() {
  return (
    <div>
      {/* <UseReducer_todo /> */}
      <Router>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/counter">Counter</Link>
        <Switch>
          <UserContext.Provider value={"Surendhar"}>
            <ProffesionContext.Provider value={"FullStack Trader"}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/counter">
                <SecondCounter />
              </Route>
            </ProffesionContext.Provider>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
