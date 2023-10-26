import React, { useState } from "react";
import { Link } from "react-router-dom";
import rockImage from "./images/Rock.png"; 
import paperImage from "./images/Paper.png"; 
import scissorsImage from "./images/Scissor.png"; 

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameResult, setGameResult] = useState(null);
  const [gameStarted, setGameStarted] = useState(false); 
  const [score, setScore] = useState(0); 
  const [restartGame, setRestartGame] = useState(false); 

  const choices = [
    { name: "Rock", image: rockImage },
    { name: "Paper", image: paperImage },
    { name: "Scissors", image: scissorsImage },
  ];

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return { result: "It's a tie!", scoreChange: 0 };
    if (
      (user === "Rock" && computer === "Scissors") ||
      (user === "Paper" && computer === "Rock") ||
      (user === "Scissors" && computer === "Paper")
    ) {
      return { result: "You win!", scoreChange: 1 };
    } else {
      return { result: "Computer wins!", scoreChange: -1 };
    }
  };

  const handleChoiceClick = (choice) => {
    if (restartGame) {
      // If restart button is clicked, reset the game and score
      setRestartGame(false);
      setUserChoice(null);
      setComputerChoice(null);
      setGameResult(null);
      setScore(0);
    }

    const computer = getComputerChoice();
    const { result, scoreChange } = determineWinner(choice.name, computer.name);

    setUserChoice(choice);
    setComputerChoice(computer);
    setGameResult(result);

    // Update the score
    setScore(score + scoreChange);
    setRestartGame(true);
  };

  const handleStartClick = () => {
    // Reset the game and score
    setUserChoice(null);
    setComputerChoice(null);
    setGameResult(null);
    setScore(0);
    setRestartGame(false);
    setGameStarted(true);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <div className="py-8 flex flex-row items-center justify-between">
        <Link to="/" className="text-xl font-semibold px-10">
          <i className="fa-solid fa-arrow-left pr-4"></i>Back
        </Link>
        <h1 className="px-10 font-bold text-5xl text-violet-800">
          <span className="text-orange-500">Rock Paper Scissors</span> Game
        </h1>
      </div>
      <div className="h-full mx-52 my-2 flex flex-col items-center justify-center rounded-lg bg-violet-100 ">
        {!gameStarted ? ( // Show the start button if the game hasn't started
          <button
            className="bg-violet-500 hover:bg-orange-500 text-white font-bold py-2 px-12 rounded-lg "
            onClick={handleStartClick}
          >
            Start Game
          </button>
        ) : (
          <div>
            <div className="bg-white p-10 rounded-lg">
              <h2 className="text-xl font-semibold text-center mb-4">
                Choose Your Move
              </h2>
              <div className="space-x-4 flex flex-row">
                {choices.map((choice) => (
                  <button
                    key={choice.name}
                    className="py-2 px-4 flex items-center rounded-full h-40 w-40"
                    onClick={() => handleChoiceClick(choice)}
                  >
                    <img
                      src={choice.image}
                      alt={choice.name}
                      className="w-full h-full mr-2"
                    />
                  </button>
                ))}
              </div>
              {userChoice && computerChoice && (
                <div className="mt-4 text-xl font-semibold text-center">
                  <div className="flex items-center justify-between text-violet-800">
                    <h2>Your Choice: {userChoice.name}</h2>
                    <h2>Computer's Choice: {computerChoice.name}</h2>
                  </div>

                  <h2>{gameResult}</h2>
                  <p>Score: {score}</p>
                  {restartGame && (
                    <button
                      className="mt-4 py-2 px-12 bg-violet-500 hover:bg-orange-500 text-white font-bold rounded-lg text-base"
                      onClick={handleStartClick}
                    >
                      Restart Game
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RockPaperScissors;
