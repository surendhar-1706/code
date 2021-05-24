import { useEffect, useState } from "react";

const TestMap = () => {
    const [appstate,setappstate] = useState({loading:true,restdata:null})
    useEffect(
         ()=>{
        async function test() {
        const fetched_data = await fetch("https://jsonplaceholder.typicode.com/users");
        const fetched_json_data = await fetched_data.json();
        const testing = fetched_json_data;
        // console.log(testing);
        setappstate({loading:false,restdata:testing})
        }
        test()
    }, []  );
   
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(data=>data.json())
    // .then(json_data =>setappstate({loading:false,restdata:json_data}))
  
    return ( 
        <div>
            Hello,From test Map
            {appstate.loading ? "User data is loading":
            appstate.restdata.map(
              (single_data)=>{
                   return(
                          <div key ={single_data.id}>
                              {single_data.id}
                              {single_data.name}
                          </div>
                   ) 
              }
                )
            }
        </div>
     );
}
 
export default TestMap;