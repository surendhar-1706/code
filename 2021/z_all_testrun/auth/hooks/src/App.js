import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import ThemeContextProvider from "./context/ThemeContext";
import BookContextProvider from "./context/BookContext";
import NewNavbar from "./components/NewNavbar";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      {/* <ThemeContextProvider>
        <Navbar />
        <BookList />
      </ThemeContextProvider> */}
      <BookContextProvider>
        <NewNavbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
