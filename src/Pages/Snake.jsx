import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Snake = () => {
  const canvasRef = useRef(null);
  const [snake, setSnake] = useState([{ x: 5, y: 5 }]);
  const [food, setFood] = useState({ x: 10, y: 10 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [showGameOverModal, setShowGameOverModal] = useState(false);

  useEffect(() => {
    if (!gameStarted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const cellSize = 20;
    const gridSize = canvas.width / cellSize;

    const moveSnake = () => {
      const newSnake = [...snake];
      let headX = newSnake[0].x;
      let headY = newSnake[0].y;

      if (direction === "RIGHT") headX++;
      if (direction === "LEFT") headX--;
      if (direction === "UP") headY--;
      if (direction === "DOWN") headY++;

      newSnake.unshift({ x: headX, y: headY });

      if (headX === food.x && headY === food.y) {
        setFood({
          x: Math.floor(Math.random() * gridSize),
          y: Math.floor(Math.random() * gridSize),
        });
        setScore(score + 1);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("UP");
          break;
        case "ArrowDown":
          setDirection("DOWN");
          break;
        case "ArrowLeft":
          setDirection("LEFT");
          break;
        case "ArrowRight":
          setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    const checkCollision = () => {
      const head = snake[0];
      if (
        head.x < 0 ||
        head.x >= gridSize ||
        head.y < 0 ||
        head.y >= gridSize ||
        snake
          .slice(1)
          .some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        // Game over logic
        setShowGameOverModal(true);
        setGameStarted(false);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "red";
      ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);

      ctx.fillStyle = "green";
      snake.forEach((segment) => {
        ctx.fillRect(
          segment.x * cellSize,
          segment.y * cellSize,
          cellSize,
          cellSize
        );
      });
    };

    const gameInterval = setInterval(() => {
      moveSnake();
      checkCollision();
      draw();
    }, 200);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(gameInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, food, gameStarted, score]);

  const startGame = () => {
    setSnake([{ x: 5, y: 5 }]);
    setFood({ x: 10, y: 10 });
    setDirection("RIGHT");
    setGameStarted(true);
    setScore(0);
    setShowGameOverModal(false); // Close the game over modal
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-white">
      <div className="py-8 flex flex-row items-center justify-between">
        <Link to="/" className="text-xl font-semibold px-10">
          <i className="fa-solid fa-arrow-left pr-4"></i>Back
        </Link>
        <h1 className="px-10 font-bold text-5xl text-violet-800">
          <span className="text-orange-500">Snake</span> Game
        </h1>
      </div>
      <div className="h-full mx-52 my-2 flex flex-col items-center justify-center rounded-lg bg-violet-100 ">
        {gameStarted ? (
          <div className="bg-white p-10 rounded-lg">
            <canvas
              ref={canvasRef}
              width={400}
              height={400}
              className="border-2 border-black mb-4"
            />
            <div className="text-lg font-bold">Score: {score}</div>
          </div>
        ) : showGameOverModal ? (
          <div className="flex items-center justify-center z-10">
            <div className="bg-white p-10 rounded-md shadow-lg flex flex-col items-center justify-center">
              <h2 className="text-2xl font-semibold mb-4">Game Over!</h2>
              <p>Your Score: {score}</p>
              <button
                onClick={startGame}
                className="mt-4 bg-violet-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Restart Game
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={startGame}
            className="bg-violet-500 hover:bg-orange-500 text-white font-bold py-2 px-12 rounded-lg"
          >
            Start Game
          </button>
        )}
      </div>
    </div>
  );
};

export default Snake;
