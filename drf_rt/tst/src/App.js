import { useEffect, useState } from "react";
import {
   BrowserRouter as Router,
   Link,
   Switch,
   Route,
} from 'react-router-dom';
import TestMap from "./components/TestMap";

function App() {
  const [appstate,setappstate] = useState({loading:true,random_data : null})

 useEffect(
    ()=>{
      async function test(){
        const response = await fetch("https://api.randomuser.me/");
      const jsondata = await response.json();
      const [testing] = jsondata.results;
      setappstate({loading:false,random_data : testing})
    }
test()
   },[]
 );
 
  
  return (
    <div>
  { appstate.loading?'Loading...':appstate.random_data.name.first}
  <Router>
      <Link to='/map' > Click for TestMap</Link>
      <Switch>
      <Route path ='/map'>
      <TestMap/>
      </Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;
