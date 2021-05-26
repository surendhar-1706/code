
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './components/Create';
import ListDetails from './components/ListDetails';
import NotFound from './components/NotFound';


function App() {
  
  
  return (
    <div className="App">
     
    
    <Router>
    <Navbar/>
      <Switch>
      
        <Route exact path ='/'><Home/></Route>

        <Route path ='/create'><Create/></Route>
        <Route path ='/todo/:id'><ListDetails/> </Route>
        <Route path ='*'><NotFound/></Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
