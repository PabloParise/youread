import React from "react";
import { FaHome, FaFireAlt, FaSearch, FaBars, FaMoon, FaSun } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from './hooks/useDarkMode';

const NavBar = ({shown}) => {
    return (
        <div className={`fixed top-0 h-14 w-full px-4 z-20
                        ${shown ? 'scale-y-100' : 'scale-y-0'} flex flex-row justify-between items-center
                        md:justify-around md:px-0 transition-all duration-100 origin-top ease-out
                        bg-blue-800 text-white shadow-lg`}>
            <Link to='/'><img src="/images/navLogo.png" className="h-12"/></Link>
            <div className="flex flex-row">
              <NavLink to='/' 
                className={({ isActive }) =>
                  isActive ? 'px-1 md:px-4 text-green-400' : 'px-1 md:px-4'}
              ><NavBarIcon icon={<FaHome size='20'/>} text={"Home"} /></NavLink>
              <NavLink to='/popular' 
                className={({ isActive }) =>
                  isActive ? 'px-1 md:px-4 text-green-400' : 'px-1 md:px-4'}
              ><NavBarIcon icon={<FaFireAlt size='20'/>} text={"Popular"} /></NavLink>
              <NavLink to='/search' 
                className={({ isActive }) =>
                  isActive ? 'px-1 md:px-4 text-green-400' : 'px-1 md:px-4'}
              ><NavBarIcon icon={<FaSearch size='20'/>} text={"Search"} /></NavLink>
            </div>
        </div>
    );
};

const NavBarIcon = ({ icon, text = 'tooltip' }) => {
    return (
        <div className="navbar-icon group">
            {icon}
            <span className="navbar-tooltip md:group-hover:scale-100">
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