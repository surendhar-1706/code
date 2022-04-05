import { Box } from "@mui/system";
import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Showcase from "./components/sections/Showcase";
import Wheel from "./components/Wheel";
function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Box sx={{ display: "flex", alignItems: "center", mx: 5, mt: 1 }}>
        <Wheel />
      </Box>
      {/* <About />
      <Roadmap />
      <Showcase /> */}
    </div>
  );
}

export default App;
