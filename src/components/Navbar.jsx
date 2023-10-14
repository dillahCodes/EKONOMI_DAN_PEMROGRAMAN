import { useEffect, useState } from "react";
import { NavbarToggle } from "./NavbarToggle";
import DarkModeToggle from "./DarkModeToggle";
import { GrInstagram } from "react-icons/gr";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarCondition, setNavbarCondition] = useState(true);
  const navbarConditionHandler = () => {
    navbarCondition ? setNavbarCondition(false) : setNavbarCondition(true);
  };
  const [darkMode, setDarkMode] = useState(true);
  const userTheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

  const darkModeHandler = () => {
    let root = document.getElementById("root");
    if (darkMode) {
      setDarkMode(false);
      root.classList.add("dark");
    } else {
      setDarkMode(true);
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    let root = document.getElementById("root");
    if (userTheme) {
      setDarkMode(false);
      root.classList.add("dark");
    } else {
      setDarkMode(true);
      root.classList.remove("dark");
    }

    const darkModeListener = window.matchMedia("(prefers-color-scheme: dark)");
    darkModeListener.addListener((e) => {
      if (e.matches) {
        setDarkMode(false);
        root.classList.add("dark");
      } else {
        setDarkMode(true);
        root.classList.remove("dark");
      }
    });

    return () => {
      darkModeListener.removeListener(darkModeListener);
    };
  }, [userTheme]);

  const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", to: "home", URL: "/home" },
    { name: "Features", to: "features" },
    { name: "another Features", to: "another-features" },
  ];

  return (
    <div className={`w-full box-border shadow-md dark:shadow-black dark:bg-slate-700 z-10 fixed top-0 bg-[#ebebeb] overflow-y-hidden p-2 ${navbarCondition ? "h-[75px] transition-all  ease-out duration-700" : "h-[420px] transition-all  ease-out duration-300 "} md:overscroll-y-none  md:flex md:items-center md:h-auto md:justify-between`}>
      <div className="flex items-center px-4 py-2 text-2xl cursor-pointer gap-x-2 font-Oswald ">
        <h1 className="text-black dark:text-slate-300">
          _dillah.<span className="text-[#4cb0af] ">codes</span>
        </h1>
        <DarkModeToggle darkMode={darkMode} darkModeHandler={darkModeHandler} />
      </div>

      <ul className="md:w-[80%] pl-2 my-3 text-lg text-black capitalize md:my-0 md:items-center md:flex md:justify-around font-Kanit dark:text-slate-300">
        {navItems.map((item) => (
          <Link to={item.URL} key={item.name}>
            <li className="cursor-pointer md:my-0 hover:bg-[#4cb0af] py-2 px-2 my-10 rounded-md hover:text-[#F5F5F5] transition-all duration-300" onClick={() => scrollToElement(item.to)}>
              {item.name}
            </li>
          </Link>
        ))}
        <button className="relative flex justify-center items-center dark:hover:text-[#F5F5F5] dark:text-slate-300 w-40 overflow-hidden mt-2 md:mt-0 text-[#F5F5F5] transition-all bg-[#4cb0af] border-[#4cb0af] rounded-md shadow-2xl h-9 before:ease before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#F5F5F5] before:opacity-10 before:duration-700 hover:shadow-[#4cb0af] hover:before:-translate-x-40">
          <a href="https://www.instagram.com/_dillah.codes/">
            <span className="flex items-center justify-center gap-x-3 ">
              <span> follow me</span>
              <span>
                <GrInstagram />
              </span>
            </span>
          </a>
        </button>
      </ul>
      <NavbarToggle navbarConditionHandler={navbarConditionHandler} />
    </div>
  );
};

export default Navbar;
