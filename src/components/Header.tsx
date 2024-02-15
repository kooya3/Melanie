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

const Header = () => {
  const theme = useContext(DarkModeContext);
  const { isDark } = theme.mode;
  return (
    <header
      className={
        "z-10 shadow-md p-8 px-[2rem] md:px-[4rem] transition-colors items-center sticky"
      }
    >
  return (
    <div>Header</div>
  )
}

export default Header