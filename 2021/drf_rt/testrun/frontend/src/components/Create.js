import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title,settitle] = useState();
    const [description,setdescription] = useState();
    const [completed,setcompleted] = useState('true');
    const [ispending,setispending]= useState(false)
    const history = useHistory();
    const handleSubmit = (e)=>{
      
        setispending(true)
        e.preventDefault();
        
        const List = {title,description,completed}
        fetch("http://localhost:8000/api/todo/",
       { method: 'POST',
         headers: {"Content-Type":"application/json"},
        body:JSON.stringify(List)}
        ).then(()=>{
               console.log(List)
               setispending(false)
               history.push('/')
        })
    }
    return ( <div>
        From Create Page
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type ="text"
             required
              value={title}
              onChange={(e)=>{
                settitle(e.target.value)
              }} ></input><br></br>
            <label>description</label>
            <textarea required
            value={description}
            onChange={(e)=>{
                setdescription(e.target.value)
            }} ></textarea><br></br>
            <label>True or False</label>
            <select 
              value={completed}
              onChange={(e)=>{
                  setcompleted(e.target.value)
              }}>
                <option value = 'true'> True</option>
                <option value = 'false'> False</option>
            </select>
     {ispending?"Adding..":<input type="submit" value="submit"></input>}
        </form><br></br>
        {title}<br></br>
        {description}<br></br>
        {completed}<br></br>
    </div> );
}
 
export default Create;