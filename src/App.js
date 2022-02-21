import { useState, useEffect } from 'react';

import './App.css';
import Board from './components/Board.js'


function App() {
  const [currentWord, setCurrentWord] = useState('');
  // const [pastWords, setPastWords] = useState([]);

  useEffect(() => {
    const listener = (e => {
      if (e.code === 'Backspace') {
        setCurrentWord(currentWord.slice(0,-1));
      } else if (e.code === 'Enter') {
        debugger;
      } else {
        const key = e.key.toUpperCase();
        if (key.length === 1 && key >= 'A' && key <= 'Z') {
          // Valid key pressed
          setCurrentWord(`${currentWord}${key}`);
        }
      }
    });

    window.addEventListener('keyup', listener);

    return () => {
      window.removeEventListener('keyup', listener);
    }
  }, [])

  

  return (
    <div>
      <header className="app-header">
        <h2>My Wordle</h2>
      </header>
      <Board />
    </div>
  );
}

export default App;
