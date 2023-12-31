import { useEffect, useState } from "react";

const useLocalStorageState = (key, initialState) => {
  const [value, setValue] = useState(() => {
    const storedTheme = localStorage.getItem(key);
    return storedTheme ? JSON.parse(storedTheme) === "dark" : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorageState;
