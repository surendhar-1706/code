
import { useState,useEffect } from 'react';
import './App.css';


function App() {



    const[appstate,setappstate] = useState({data:null,loading:true})

let hello = useEffect( ()=>{
  async function fetching ()

{
const url = "http://127.0.0.1:8000/api/";
const fetched_data = await fetch(url);
const json_data = await fetched_data.json();
console.log(json_data)
setappstate({data:json_data,loading:false})
}
fetching();
},[])

  return (
    
    <div>
 

      { appstate.loading ? "Loading":
    appstate.data.map((d)=>{ 
      return(
       <div key = {d.id}>
       {d.title}
     
       </div>
      );
     })
      }
     
    
      </div>

    

  );

}
export default App;
