import React from "react";
import TicTacToe from "./assets/tic-tac-toe.png"
import Snake from "./assets/snake.png"
import Rock from "./assets/rock-paper-scissors.png"
import { Link } from "react-router-dom";
export default function Popular({isDarkMode}) {
    return (
        <div id="popular">
            <div className="mx-32 mt-20 py-7 flex justify-center rounded-lg">
                <h1 className={`text-3xl font-semibold uppercase ${isDarkMode?'text-violet-500':'text-violet-800'}`}><span className="text-orange-500">Most</span> Popular Games</h1>
            </div>
            <div className="mx-32 my-2 py-7 flex justify-center rounded-lg ">
                <div className={`h-80 w-80 m-7 rounded-lg flex flex-col items-center justify-center ${isDarkMode?'bg-neutral-600':'bg-violet-100'}`}>
                    <img src={TicTacToe} alt="tic-tac-toe" className="h-1/2 w-1/2 mb-6 p-4 rounded-lg"></img>
                    <div className={`h-20 w-full flex flex-col items-center justify-center text-2xl font-bold ${isDarkMode?'text-violet-400':'text-violet-800'}`}>
                        TicTacToe
                        <Link to='/tictactoe'><button className=" m-3 px-12 py-2 rounded-md text-base bg-violet-500 text-white hover:bg-orange-500 transition duration-300">Play</button></Link>
                    </div>
                </div>
                <div className={`h-80 w-80 m-7 rounded-lg flex flex-col items-center justify-center ${isDarkMode?'bg-neutral-600':'bg-violet-100'}`}>
                    <img src={Snake} alt="Snake-game" className="h-1/2 w-1/2 mb-6 p-4 rounded-lg"></img>
                    <div className={`h-20 w-full flex flex-col items-center justify-center text-2xl font-bold ${isDarkMode?'text-violet-400':'text-violet-800'}`}>
                        Snake
                        <Link to='/snake'><button className="m-3 px-12 py-2 rounded-md text-base bg-violet-500 text-white hover:bg-orange-500 transition duration-300">Play</button></Link>
                    </div>
                </div>
                <div className={`h-80 w-80 m-7 rounded-lg flex flex-col items-center justify-center ${isDarkMode?'bg-neutral-600':'bg-violet-100'}`}>
                    <img src={Rock} alt="Rock-paper-scissor" className="h-1/2 w-1/2 mb-6 p-4 rounded-lg"></img>
                    <div className={`h-20 w-full flex flex-col items-center justify-center text-2xl font-bold ${isDarkMode?'text-violet-400':'text-violet-800'}`}>
                        Rock paper scissor
                        <Link to='/rock-paper'><button className=" m-3 px-12 py-2 rounded-md text-base bg-violet-500 text-white hover:bg-orange-500 transition duration-300">Play</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

}