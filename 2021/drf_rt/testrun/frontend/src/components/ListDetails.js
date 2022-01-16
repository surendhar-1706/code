import { useParams,useHistory } from "react-router";
import UseFetch from "./UseFetch";

const ListDetails = () => {
    const { id } = useParams();
    const {state } = UseFetch("http://localhost:8000/api/todo/"+id)
    const history = useHistory();
    const handleClick = ()=>{
        fetch("http://localhost:8000/api/todo/"+state.data.id,{
            method:'DELETE',

        }).then(()=>{
            history.push('/')
        })
    }
    return ( 
       <div>
           From ListDetails 
           {
               state.loading ? "Loading":
               <div>
              {state.data.id}
              { state.data.title}
               { String(state.data.completed) }
               <button onClick={handleClick}>Delete</button>
               </div>
           }
       </div>
     );
}
 
export default ListDetails;