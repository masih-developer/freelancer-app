import { createContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkModeHandler: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );

  const toggleDarkModeHandler = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem(
      "theme",
      JSON.stringify(isDarkMode ? "dark" : "light"),
    );
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkModeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
