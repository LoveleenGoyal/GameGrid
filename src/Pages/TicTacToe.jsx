import React, { useState } from "react";
import { Link } from "react-router-dom";

function TicTacToe({isDarkMode}) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (!gameStarted || winner || squares[i]) return;

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    const squareValue = squares[i];
    let squareClass =
      "square rounded-md bg-white border-2 border-black hover:bg-neutral-100";

    if (squareValue === "X") {
      squareClass += " text-cyan-600";
    } else if (squareValue === "O") {
      squareClass += " text-rose-600";
    }

    return (
      <button
        className={squareClass}
        style={{
          margin: "10px",
          fontSize: "34px",
          fontWeight: "bold",
          height: "100px",
          textAlign: "center",
          width: "100px",
          transition: "background-color 0.3s",
        }}
        onClick={() => handleClick(i)}
      >
        {squareValue}
      </button>
    );
  };

  const getStatus = () => {
    if (!gameStarted) {
      return 'Click "Start Game" to begin';
    } else if (winner) {
      return `Winner: ${winner}`;
    } else if (squares.every((square) => square)) {
      return "Draw!";
    } else {
      return `Next player: ${xIsNext ? "X" : "O"}`;
    }
  };

  const startGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setGameStarted(true);
  };

  const restartGame = () => {
    // Reset the game and clear the winner
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className={`w-screen h-screen flex flex-col  ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="py-8 flex flex-row items-center justify-between">
        <Link to="/" className="text-xl font-semibold px-10">
          <i className="fa-solid fa-arrow-left pr-4"></i>Back
        </Link>
        <h1 className="px-10 font-bold text-5xl text-violet-800">
          <span className="text-orange-500">Tic-Tac-Toe</span> Game
        </h1>
      </div>
      <div className="h-full mx-52 my-2 flex flex-col items-center justify-center rounded-lg bg-violet-100 ">
        {!gameStarted ? (
          <button
            className="mt-4 py-2 px-12 bg-violet-500 hover:bg-orange-500 text-white font-bold rounded-lg"
            onClick={startGame}
          >
            Start Game
          </button>
        ) : (
          <div
            className="board grid gap-4 p-10 pr-14 rounded-lg bg-white"
            style={{ gridTemplateColumns: "repeat(4, 100px)" }}
          >
            <div className="status mt-2 mb-6 text-2xl font-bold">
              {getStatus()}
            </div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        )}

        {(winner || squares.every((square) => square)) && (
          <button
            className="mt-4 py-2 px-12 bg-violet-500 hover:bg-orange-500 text-white font-bold rounded-lg"
            onClick={restartGame}
          >
            Restart Game
          </button>
        )}
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default TicTacToe;
