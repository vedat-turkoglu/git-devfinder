import "./nav-bar.style.css";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

import iconMoon from "../../assets/images/icon-moon.svg";
import iconSun from "../../assets/images/icon-sun.svg";

const NavBar = () => {
  const [themeMode, setThemeMode] = useState("light");

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  useEffect(() => {
    setThemeMode(systemPrefersDark ? "dark" : "light");
  }, [systemPrefersDark]);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(themeMode);
  }, [themeMode]);

  const onChangeBtn = () =>
    themeMode === "dark" ? setThemeMode("light") : setThemeMode("dark");

  return (
    <>
      <nav className="wrapper">
        <div className="logo">devfinder</div>

        <label htmlFor="toggle-switch" className="theme-switch">
          <span> {themeMode === "dark" ? "LIGHT" : "DARK"} </span>
          <img
            src={themeMode === "dark" ? iconSun : iconMoon}
            alt="dark mode light mode icons"
            className="switch-icon"
            width={20}
            height={20}
          />
          <input
            type="checkbox"
            name="toggle-switch"
            id="toggle-switch"
            onChange={onChangeBtn}
            checked={themeMode === "dark"}
          />
        </label>
      </nav>
    </>
  );
};
export default NavBar;
