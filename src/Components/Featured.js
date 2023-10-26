import React from "react";
import Guide from "./assets/guide.jpg"
import { Link } from "react-router-dom";
export default function Featured({ isDarkMode }) {

    

    return (
        <>
            <div className="mx-32 my-10 py-7 flex justify-center rounded-lg">
                <h1 className={` text-3xl font-semibold uppercase ${isDarkMode ? 'text-violet-500' : 'text-violet-800'}`}><span className="text-orange-500">Featured</span> Article</h1>
            </div>
            <div className={`mx-32 my-10 p-7 px-20 rounded-lg flex flex-row ${isDarkMode ? 'bg-neutral-600' : 'bg-violet-100'}`}>
                <img src={Guide} alt="guide" className="h-full w-3/5 rounded-lg"></img>
                <div className="mx-5">
                    <h1 className={`text-4xl font-semibold leading-normal ${isDarkMode? 'text-violet-400': 'text-violet-800'}`}>Sudoku Tips For Beginners:
                        How to Solve Efficiently</h1>
                    <p className={`py-5 text-xl font-semibold ${isDarkMode ?'text-white': ''}`}>Get started solving the classic number puzzle with tips from some of the best solvers in the world.</p>

                    <Link to='/sudoku-article' className={`pl-1 hover:underline ${isDarkMode ? 'text-violet-400' :' text-violet-800'}`}>Read More</Link>

                </div>
            </div>
            <footer className="w-full pb-9 mt-24 border-t-4 border-orange-500">
                <div className={`h-20 flex flex-row justify-between items-center ${isDarkMode ? 'dark-mode' : ''}`}>
                    <Link to='/' className="px-4">
                        <p className={`text-3xl font-bold ${isDarkMode ? 'text-violet-500' : 'text-violet-800'}`}>Game<span className="text-orange-500">Grid</span></p>

                    </Link>
                    <p>&copy;All rights reserved</p>
                    <div className="flex flex-row">
                        <p className="px-4">Terms of Use</p>
                        <p className="px-4">Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    )
}