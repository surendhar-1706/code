import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvoider from "./context/AuthProvoider";

function App() {
  return (
    <div>
      <AuthProvoider>
        <Router>
          <div>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </Router>
      </AuthProvoider>
    </div>
  );
}

export default App;
