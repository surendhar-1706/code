import React, { createContext, useContext, useState } from "react";
export const ThemeContext = createContext();
function ThemeContextProvider({ children }) {
  const [theme, settheme] = useState({
    isLighttheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  });
  return (
    <ThemeContext.Provider value={{ ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
