import React, {useState} from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  console.log(isDarkMode);

  function handleToggleDarkMode() {
    // console.log("clicked")
    setIsDarkMode(!isDarkMode)
  }
  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button>
    </header>
  );
}

export default Header;
