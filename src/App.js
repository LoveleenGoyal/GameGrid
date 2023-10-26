import React, { useState,useEffect } from "react";
import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TicTacToe from './Pages/TicTacToe';
import Snake from './Pages/Snake';
import RockPaperScissors from './Pages/RockPaperScissors';
import { Article } from './Pages/Article';
import LoginSignup from "./Pages/LoginSignUp";
import Loader from "./Loader";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay (e.g., API requests) to hide the loader
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<HomePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>} />
          <Route path='/tictactoe' element={<TicTacToe isDarkMode={isDarkMode} />} />
          <Route path='/snake' element={<Snake isDarkMode={isDarkMode} />} />
          <Route path='/rock-paper' element={<RockPaperScissors isDarkMode={isDarkMode} />} />
          <Route path='/sudoku-article' element={<Article isDarkMode={isDarkMode} />} />
          <Route path ='/login-signup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
