import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
     
      <Router>
        <Switch>
          <Route exact path ='/'> <Home /></Route>
          <Route path ='/register'><Register/> </Route>
          <Route path ='/login'><Login/></Route>
         
        </Switch>
      </Router>
    </div>
  );
}

export default App;
