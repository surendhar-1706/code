
import useForm from './useForm';
import {useEffect, useState} from 'react';
import UseFetch from './useFetch';
const UseState = () => {

    const [values,handleChange]=useForm({email: '',password:''});
    const [count,setcount] = useState(1)
    useEffect(
        ()=>{
            console.log("bla")
            return ()=>{
                console.log("hello")
        }
       
        },[values.password]
        
    )
   const {data,loading}= UseFetch(`http://numbersapi.com/${count}/trivia`);
    return ( 
        <div>
            {loading ? "Loading": data}
           <h1>From use state</h1>
           <button onClick={()=>setcount(c=>c+1)}>click:{count}</button>
            <input name="email" value = {values.email} onChange={handleChange}/>
            <input name="password"  value ={values.password} onChange={handleChange}/>
      
        </div>
      
     );
}
 
export default UseState;