import { Link } from "react-router-dom";

const TaskList = ({tasks}) => {
    return ( 
        <div>
        {tasks.loading ? "Loading": tasks.data.map((d)=>{
            return(
              <div key ={d.id}>
                <Link to={`/todo/${d.id}`}>
                {d.id} &nbsp;
                {d.title} &nbsp;
                {d.description} &nbsp;
                </Link>
                
                <br></br>
                <br></br>
            
              </div>
            );
          })}
          </div>
     );
}

 
export default TaskList;