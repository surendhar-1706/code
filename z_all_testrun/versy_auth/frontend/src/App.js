import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import ArticleDetail from "./components/ArticleDetail";
import ArticleForm from "./pages/FormPage";
function App() {
  return (
    <div>
      <Router>
        <Navbar>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/article/:id">
              <ArticleDetail />
            </Route>
            <Route path="/create">
              <ArticleForm />
            </Route>
          </Switch>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
