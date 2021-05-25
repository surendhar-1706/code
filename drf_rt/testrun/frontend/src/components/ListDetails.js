import { useParams } from "react-router";
import UseFetch from "./UseFetch";

const ListDetails = () => {
    const { id } = useParams();
    const {state } = UseFetch("http://localhost:8000/api/todo/"+id)
    return ( 
       <div>
           From ListDetails 
           {
               state.loading ? "Loading":
               <div>
              {state.data.id}
              { state.data.title}
               </div>
           }
       </div>
     );
}
 
export default ListDetails;