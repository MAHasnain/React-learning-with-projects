import { createContext } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ThemeContext.Provider;

// @custom hook
export const useTheme = () => {
  return ThemeContext();
};
