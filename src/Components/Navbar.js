import React, { useState } from "react";
// import menu from "./assets/menu-fill.png";
import { Link } from "react-router-dom";


function Navbar({ isDarkMode, toggleDarkMode }) {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="relative">
            <nav className={`p-4 flex items-center justify-between  ${isDarkMode ? 'dark-mode' : ''}`}>
                <div className={`px-5 flex items-center space-x-4 ${isDarkMode ? 'dark-mode' : ''}`}>
                    <i className="fa-solid fa-bars cursor-pointer text-lg" onClick={toggleMenu}></i>

                    <Link to='/' className="flex items-center space-x-2">
                        <p className={`text-3xl font-bold  ${isDarkMode ? 'text-violet-500' : 'text-violet-800'}`}>Game<span className="text-orange-500">Grid</span></p>
                    </Link>
                </div>
                <div className={`px-5 flex items-center space-x-2 ${isDarkMode ? 'dark-mode' : ''}`}>
                    <div className="flex items-center space-x-2">
                        <i className={`fa-regular ${isDarkMode ? 'fa-sun' : 'fa-moon'} px-5 text-xl`} onClick={toggleDarkMode}></i>
                        <Link to= '/login-signup' >
                        <button className="px-12 py-2 rounded-md text-xs bg-violet-500 text-white font-bold hover:bg-orange-500 transition duration-300">
                            LOG IN
                        </button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className={`fixed top-0 left-0 h-screen bg-white ${menuVisible ? "block" : "hidden"} ${isDarkMode ? 'dark-mode' : ''}`} style={{ width: '25vw', zIndex: '100' }} >
            <i className="fa-solid fa-xmark float-right m-4 mr-8" onClick={() => setMenuVisible(!menuVisible)}></i>
                <ul className="p-5 flex flex-col space-x-4 text-xl font-bold">
                    
                    <li className="ml-4 mb-10 ">
                        <Link to='/' className="hover:underline">
                            Home
                        </Link>
                    </li>
                    <li className="mb-10">
                        <Link to='/tictactoe' className="hover:underline">
                            Tic-Tac-Toe Game
                        </Link>
                    </li>
                    <li className="mb-10">
                        <Link to='/snake' className="hover:underline">
                            Snake Game
                        </Link>
                    </li>
                    <li className="mb-10">
                        <Link to='/rock-paper' className="hover:underline">
                            Rock Paper Scissors Game
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default Navbar;
