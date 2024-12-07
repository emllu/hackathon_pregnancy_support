import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Navlinks from "./NavLinks";
import { useEffect, useState } from "react";
const themes = {
  dim: "dim",
  winter: "winter",
};
function getItemFromLocalStorage() {
  return localStorage.getItem("theme") || themes.winter;
}
const Navbar = () => {
  const [theme, setTheme] = useState(getItemFromLocalStorage());
  function handleTheme() {
    const { winter, dim } = themes;
    const newTheme = theme === winter ? dim : winter;
    setTheme(newTheme);
  }
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <nav className="bg-purple-500">
      <div className="align-element navbar">
        <div className="navbar-start menu menu-horizontal">
         
          <div className="dropdown">
            <label className="btn-ghost btn lg:hidden" tabIndex={0}>
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul className=" bg-base-200 menu menu-sm dropdown-content w-52 p-2 mt-3 rounded-box shadow z-[1]">
              <Navlinks />
            </ul>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div> */}
        <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal mr-3 ">
            <Navlinks />
          </ul>
          <label className="swap swap-rotate ml-6">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
