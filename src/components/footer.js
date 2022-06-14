import React from "react";

const Footer = () => {

    return (
        <>
        <footer className=" h-48 flex items-center justify-center bg-slate-900 text-white">
            <div className="flex flex-col items-center justify-around sm:flex-row w-5/6 border-2 rounded-md p-4 sm:p-8 lg:text-xl max-w-6xl">
                <p>YOUREAD © 2022</p>
                <div className="flex items-center pt-4 sm:pt-0">
                    <p className="mr-4">Developed by</p>
                    <a href="https://www.linkedin.com/in/pabloparise/" target="_blank" rel="noopener noreferrer"><img src="./images/pplogo.png" alt="PPLogo" className="h-14" /></a>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;