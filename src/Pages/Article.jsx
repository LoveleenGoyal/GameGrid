import React, {useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import sudoku from "./images/sudoku.jpg";
import { Link } from "react-router-dom";

export const Article = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode?'dark-mode':''}` }>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <div className={`mx-auto max-w-3xl p-6 ${isDarkMode?'dark-mode':''}`}>
        <div className={`m-4 rounded-xl ${isDarkMode ? 'bg-neutral-500':'bg-violet-800'}`}>
          <img
            src={sudoku}
            alt="sudoku"
            className="w-full h-auto p-2 rounded-xl"
          />
        </div>
        <article className={`mt-6 mx-4 p-4 rounded-xl ${isDarkMode ? 'bg-neutral-500':'bg-violet-100'}`}>
          <h1
            className={`text-4xl font-semibold leading-normal ${
              isDarkMode ? "text-neutral-800" : "text-violet-800"
            }`}
          >
            Sudoku Tips For Beginners: How to Solve Efficiently
          </h1>
          <p
            className={`py-5 text-xl font-semibold ${
              isDarkMode ? "text-white" : ""
            }`}
          >
            Get started solving the classic number puzzle with tips from some of
            the best solvers in the world.
          </p>
          <p>
            Everybody can solve a hard Sudoku. Maybe not right now, maybe not
            without some practice, but trust me, it’s possible. By the end of
            this article, you’ll be equipped to tackle intense puzzles in a way
            you find both challenging and fun. We asked some of the best Sudoku
            solvers in the world for their tips and tricks, and we’ll be sharing
            some of those with you here. There’s no correct way to solve a
            puzzle, but we hope that, using the techniques demonstrated here,
            you can become your best Sudoku self.
          </p>
          <br></br>
          <p>
            But first, the basics: A classic Sudoku has nine boxes, each
            subdivided into nine cells, for a total of 81. The goal is to fill
            in each of the cells with a number from one through nine. The digits
            must be placed so that each appears only once per row, column and
            box. It sounds simple written out like this, but some of these
            puzzles can be quite twisted.
          </p>
          <br></br>
          <h1 className="text-2xl font-semibold mt-4">Scan for Singles</h1>
          <br></br>
          <p>
            The first step to any successful Sudoku solve is to scan for cells
            that can only contain a single digit. On beginner puzzles, there are
            usually one or two obvious ones lurking somewhere and they are an
            easy way to start making progress.
          </p>
          <br></br>
          <p>
            Once you start thinking about the numbers this way, you can start
            looking closely at the geometry of the grid. As you get more
            practice, your pattern recognition will improve. Maybe there’s a box
            with seven or eight numbers filled in already, or a row with six
            digits done. You’ll begin recognizing patterns that will help you
            solve more efficiently.
          </p>
          <br></br>
          <h1 className="text-2xl font-semibold mt-4">
            How to Unstick Yourself
          </h1>
          <br></br>
          <p>
            Ms. Mcleod says she often thinks about one piece of advice when she
            gets stuck: “A valid Sudoku is only allowed to have one solution.”
            Applying this, it helps her make decisions when presented with digit
            placements that might result in two equally possible solutions.
          </p>
          <br></br>
          <p>
            Focus on how you make progress, and how you think about what to look
            for next. At its core, Sudoku is a pattern recognition puzzle. As
            you solve more of them, you will slowly get better. Whether you’re
            trying to solve as quickly as possible, or just looking for a way to
            unwind, we hope these tips will help you achieve your solving goal.
          </p>
        </article>
      </div>
      <footer className="w-full pb-9 mt-24 border-t-4 border-orange-500">
        <div className="h-20 flex flex-row justify-between items-center">
          <Link to="/" className="px-4">
            <p className="text-3xl font-bold text-violet-800">
              Game<span className="text-orange-500">Grid</span>
            </p>
          </Link>
          <p>&copy;All rights reserved</p>
          <div className="flex flex-row">
            <p className="px-4">Terms of Use</p>
            <p className="px-4">Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
