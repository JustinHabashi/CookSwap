import React from 'react';
import cookswap from './cookswap.jpeg'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={cookswap} className="App-logo" alt="logo" />
        <p>
          Welcome to CookSwap
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Profile
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nearby Swaps
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start a Swap
        </a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meal Ideas
        </a>
                <style>{'body { background-color: red; }'}</style>
      </header>
    </div>
    <p> This is a sentence. </p>
    </>
  );
}

export default App;
