import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Roadmap />
      <Showcase />
    </div>
  );
}

export default App;
