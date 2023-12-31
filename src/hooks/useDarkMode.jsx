import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of ThemeProvider");
  return context;
};

export default useDarkMode;
