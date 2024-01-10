
const Header = ({isDarkMode, onToggleDarkMode}) => {
  const handleToggleDarkMode = () => {
    onToggleDarkMode(); //in this case could put the call back directly in the event listener
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
