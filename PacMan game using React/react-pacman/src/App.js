import React, { useState, useEffect } from 'react';
import './App.css'; // Create a CSS file for styling

const PacMan = () => {
  const [pacmanPosition, setPacmanPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState('RIGHT');

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          setDirection('UP');
          break;
        case 'ArrowDown':
          setDirection('DOWN');
          break;
        case 'ArrowLeft':
          setDirection('LEFT');
          break;
        case 'ArrowRight':
          setDirection('RIGHT');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const movePacman = () => {
      switch (direction) {
        case 'UP':
          setPacmanPosition((prev) => ({ ...prev, y: prev.y - 1 }));
          break;
        case 'DOWN':
          setPacmanPosition((prev) => ({ ...prev, y: prev.y + 1 }));
          break;
        case 'LEFT':
          setPacmanPosition((prev) => ({ ...prev, x: prev.x - 1 }));
          break;
        case 'RIGHT':
          setPacmanPosition((prev) => ({ ...prev, x: prev.x + 1 }));
          break;
        default:
          break;
      }
    };

    const gameInterval = setInterval(() => {
      movePacman();
    }, 300); // Adjust the interval based on your game speed

    return () => {
      clearInterval(gameInterval);
    };
  }, [direction]);

  return (
    <div className="pacman-game">
      <div
        className={`pacman ${direction}`}
        style={{ top: `${pacmanPosition.y * 40}px`, left: `${pacmanPosition.x * 40}px` }}
      ></div>
    </div>
  );
};

export default PacMan;
