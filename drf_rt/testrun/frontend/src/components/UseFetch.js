import { useEffect,useState } from "react"

const UseFetch = (url) => {
    const [state,setstate] = useState({data:null,loading:true})
    useEffect(()=>
  {
    const abortCont = new AbortController();
    async function fetching()
    {
      try{
      
      const fetch_data = await fetch(url,{signal: abortCont.signal})
      const json_data = await fetch_data.json()
      console.log(json_data)
      setstate({loading:false,data:json_data})}
      catch(err)
      {
        console.log(err.message)
      }
      
    }
    fetching();
    return(
      ()=>
      { abortCont.abort();}
     
    );
  },[url])
    return {state};
}
 
export default UseFetch;