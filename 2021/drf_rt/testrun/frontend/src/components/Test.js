const [state,setstate] = useState({data:null,loading:true})
  useEffect(()=>
  {
    async function fetching()
    {
      const url = "http://localhost:8000/api/todo"
      const fetch_data = await fetch(url)
      const json_data = await fetch_data.json()
      console.log(json_data)
      setstate({loading:false,data:json_data})
    }
    fetching();
  },[])

  {state.loading ? "Loading": state.data.map((d)=>{
    return(
      <div key ={d.id}>
        {d.id} &nbsp;
        {d.title} &nbsp;
        {d.description} &nbsp;
        <button value = {d.completed} ></button>&nbsp;
        <br></br>
        <br></br>
    
      </div>
    );
  })}