import React from "react";
import { FaHome, FaFireAlt, FaSearch, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { Link } from "react-router-dom";
import useDarkMode from './hooks/useDarkMode';

const NavBar = () => {
    return (
        <div className="fixed bottom-0 h-12 w-full 
                        flex flex-row justify-around 
                        bg-slate-800 text-white shadow-lg">
            {/*<ThemeIcon />*/}
            <Link to='/'><NavBarIcon icon={<FaHome size='26'/>} /></Link>
            <Link to='/popular'><NavBarIcon icon={<FaFireAlt size='26'/>} /></Link>
            <Link to='/'><NavBarIcon icon={<FaSearch size='26'/>} /></Link>
            <NavBarIcon icon={<GoGear size='28'/>} />
        </div>
    );
};

const NavBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className="navbar-icon group">
            {icon}
            <span class="navbar-tooltip group-hover:scale-100">
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