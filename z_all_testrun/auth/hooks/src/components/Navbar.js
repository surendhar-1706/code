import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const theme = useContext(ThemeContext);
  console.log(theme.isLighttheme);
  const { isLighttheme, light } = theme;
  console.log(light);
  return (
    <div>
      <nav style={{ background: light.ui, color: light.syntax }}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
