import { useContext } from "react";
import { DarkModeContext } from "../providers/DarkModeProvider";
import { Icon } from "react-icons-kit";
import { sun } from "react-icons-kit/icomoon/sun";
import { moonO } from "react-icons-kit/fa/moonO";
import { Link } from "react-router-dom";


const setTheme = (darkMode: DarkModeContext) => {
  const isDark = darkMode.mode.isDark;
  darkMode.dispatch(!isDark);
};

  return (
    <div>Header</div>
  )
}

export default Header