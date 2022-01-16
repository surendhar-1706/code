import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import ListingDetails from "./pages/ListingDetails";
import AuthContextProvider from "./context/AuthContextProvider";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <AuthContextProvider>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/listing">
              <Listing />
            </Route>
            <Route exact path="/listing/:slug">
              <ListingDetails />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
          </AuthContextProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
