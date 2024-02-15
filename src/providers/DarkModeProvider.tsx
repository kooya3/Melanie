import React, { Context, createContext, useReducer, useEffect } from "react";

export interface Theme {
  isDark: boolean;
}
export const LIGHT_THEME: Theme = {
  isDark: false,
};

export const DARK_THEME: Theme = {
  isDark: true,
};

interface DarkModeContext {
  mode: Theme;
  dispatch: React.Dispatch<any>;
}

const darkModeReducer = (_: any, isDark: boolean) =>
  isDark ? DARK_THEME : LIGHT_THEME;

const DarkModeContext: Context<DarkModeContext> = createContext(
  {} as DarkModeContext
);

const initialState =
  localStorage.getItem("DarkMode") === "true" ? DARK_THEME : LIGHT_THEME;

interface Props {
  children: React.ReactNode;
}

const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [mode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("DarkMode", JSON.stringify(mode.isDark));
    if (localStorage.getItem("DarkMode") === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }),
    [mode];

  return (
    <DarkModeContext.Provider
      value={{
        mode,
        dispatch,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeProvider, DarkModeContext };
