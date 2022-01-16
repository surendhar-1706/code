import {Link} from 'react-router-dom'
const Navbar = () => {
    return ( 
      <nav>
          Navigation for Task Manager
          <Link to="/create">New Blog</Link>
          <Link to="/"> Home</Link>
      </nav>
     );
}
 
export default Navbar;