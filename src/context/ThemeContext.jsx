import { createContext, useContext, useLayoutEffect, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const initialTheme = () => localStorage.getItem("PANCAKE-SWAP");

  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () =>
    setTheme((theme) => (theme === "light" ? "dark" : "light"));

  useLayoutEffect(() => {
    localStorage.setItem("PANCAKE-SWAP", theme);

    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a Theme Provider");
  }

  return context;
};

export { ThemeProvider, useTheme };
