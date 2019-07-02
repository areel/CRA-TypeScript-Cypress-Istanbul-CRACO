import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const displayMessage = () => {
    return (
      <p data-testid="strap-line-text">
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {displayMessage()}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
