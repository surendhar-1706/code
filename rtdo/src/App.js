// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Link,Switch,Route } from "react-router-dom";
import Learn from "./components/Learn";
import NotHome from "./components/NotHome";
import UseState from "./components/useState";

function App() {
  return (
    <div className="App">
      
     
     
      <Router>
      <Link to ='/nothome'> Not Home</Link>
      <Link to ='/'> Home</Link>
      <Link to ='/usestate'> usestate</Link>
    <Switch>
      <Route exact path ='/'>
      <Learn/>
      </Route>
     <Route path='/nothome'>
       <NotHome/>
     </Route>
     <Route path='/usestate'>
       <UseState/>
     </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
