import AddForm from "./AddForm";
import LeadList from "./Leadslist";
import NavBar from "./Navbar";
import { Provider } from "react-redux";
import store from "../store";
const Home = () => {
  return (
    <div>
      <NavBar />
      <LeadList />
      <AddForm />
    </div>
  );
};

export default Home;
