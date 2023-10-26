import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Popular from "../Components/Popular";
import Featured from "../Components/Featured";
import Banner from "../Components/Banner";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define a variable for the background color based on isDarkMode
  const pageBackgroundColor = isDarkMode ? "rgb(59, 59, 59)" : "#fff";
  return (
    <div className="page-container" style={{ backgroundColor: pageBackgroundColor }}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Banner isDarkMode={isDarkMode} />
      <Popular isDarkMode={isDarkMode} />
      <Featured isDarkMode={isDarkMode} />
    </div>
  );
};

export default HomePage;
