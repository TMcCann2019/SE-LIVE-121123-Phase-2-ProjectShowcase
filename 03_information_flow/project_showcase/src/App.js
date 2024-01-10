import React, { useState } from "react";
import Header from "./components/Header";
import ProjectsContainer from "./components/ProjectsContainer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  function toggleDarkMode() {
    setIsDarkMode(isDarkMode =>!isDarkMode);
  }

  const appClass = isDarkMode ? "App" : "App light";

  return (
    <div className={appClass}>
      <Header 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode}
      />
      <ProjectsContainer />
    </div>
  );
};

export default App;
