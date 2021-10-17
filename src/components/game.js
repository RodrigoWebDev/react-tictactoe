import React, { useState } from "react";
import Board from "./board";

const Game = () => {
  const [gameOver, setGameOver] = useState(false);
  const [squares, setSquares] = useState([]);
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("");
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  const playAgain = () => {
    setGameOver(false);
    setSquares(Array(9).fill(null));
    setStatus("");
  };

  return (
    <div className="game">
      <h1 className="game__title">Tic Tac Toe Game</h1>
      <div className="game-board">
        <div className="score">
          <p>Score:</p>
          <p>X : {xScore}</p>
          <p>O : {oScore}</p>
        </div>
        <Board
          gameOver={gameOver}
          setGameOver={setGameOver}
          squares={squares}
          setSquares={setSquares}
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
          status={status}
          setStatus={setStatus}
          xScore={xScore}
          setXScore={setXScore}
          oScore={oScore}
          setOScore={setOScore}
        />
        {gameOver && <button onClick={() => playAgain()}>Play again</button>}
      </div>
    </div>
  );
};

export default Game;
