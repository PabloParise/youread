import React from "react";
import { FaHome, FaFireAlt, FaSearch, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import useDarkMode from './hooks/useDarkMode';

const NavBar = () => {
    return (
        <div className="fixed top-0 h-14 w-full px-4 
                        flex flex-row justify-between items-center
                        md:justify-around md:px-0
                        bg-slate-800 text-white shadow-lg">
            {/*<ThemeIcon />*/}
            <Link to='/'><img src="/images/navLogo.png" className="h-12"/></Link>
            <div className="flex flex-row">
            <Link to='/' className="px-1 md:px-4"><NavBarIcon icon={<FaHome size='20'/>} text={"Home"} /></Link>
            <Link to='/popular' className="px-1 md:px-4"><NavBarIcon icon={<FaFireAlt size='20'/>} text={"Popular"} /></Link>
            <Link to='/' className="px-1 md:px-4"><NavBarIcon icon={<FaSearch size='20'/>} text={"Search"} /></Link>
            <NavBarIcon icon={<GoGear size='22'/>} text={"Settings"} className="px-1 md:px-4"/>

            </div>
        </div>
    );
};

const NavBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className="navbar-icon group">
            {icon}
            <span class="navbar-tooltip md:group-hover:scale-100">
                {text}
            </span>
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

export default NavBar;