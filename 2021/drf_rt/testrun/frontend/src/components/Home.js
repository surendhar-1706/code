import Navbar from './Navbar';
import TaskList from './Tasklist';
import UseFetch from './UseFetch';
const Home = () => {
    const {state} = UseFetch("http://localhost:8000/api/todo")
    return ( 
        <div>
     
     <TaskList tasks ={state}/>

        </div>
     );
}
 
export default Home;