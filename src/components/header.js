import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="h-28 w-full px-4 
                        flex flex-row justify-between items-center
                        md:justify-around md:px-0
                        bg-blue-800 text-white shadow-lg">
            <Link to='/'><img src="/images/navLogo.png" className="h-24"/></Link>
            <div className="flex flex-row h-20 items-center md:text-lg lg:text-xl">
              <Link to='/' className="mx-2 py-2 md:mx-6 border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200">Home</Link>
              <Link to='/popular' className="mx-4 py-2 md:mx-6  border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200">Popular</Link>
              <Link to='/search' className="mx-2 py-2 md:mx-6 border-b-2 border-blue-800 hover:border-green-400 transition-all duration-200">Search</Link>
            </div>
        </div>
    );
};

export default Header;