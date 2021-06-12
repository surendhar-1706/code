import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/:id">
              <ArticleDetail />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
