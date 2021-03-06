import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-28 w-full px-4 
                        flex flex-row justify-between items-center
                        md:justify-around md:px-0
                        bg-blue-800 text-white shadow-lg">
            <Link to='/'><img src="/images/navLogo.png" className="h-24"/></Link>
            <div className="flex flex-row h-20 items-center md:text-lg lg:text-xl">
                <NavLink to='/' className={({ isActive }) =>
                    isActive ? 'mx-2 py-2 md:mx-6 border-b-2 border-green-400' : 
                    'mx-2 py-2 md:mx-6 border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200'}
                >Home</NavLink>
                <NavLink to='/popular' className={({ isActive }) =>
                    isActive ? 'mx-2 py-2 md:mx-6 border-b-2 border-green-400' : 
                    'mx-2 py-2 md:mx-6 border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200'}
                >Popular</NavLink>
                <NavLink to='/search' className={({ isActive }) =>
                    isActive ? 'mx-2 py-2 md:mx-6 border-b-2 border-green-400' : 
                    'mx-2 py-2 md:mx-6 border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200'}
                >Search</NavLink>
            </div>
        </div>
    );
};

export default Header;