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
      <h1 className="game__title">Tic-Tac-Toe</h1>
      <div className="game-board">
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
      </div>
      <div className="flex justify-content-center margin-top-32px">
        <div className="margin-right-40px">Player (X): {xScore}</div>
        <div>Player (O): {oScore}</div>
      </div>
      <div className={`${gameOver ? "" : "visibility-hidden"} margin-top-32px`}>
        {status || "status"}
      </div>
      {gameOver && (
        <div className="margin-top-32px">
          <button onClick={() => playAgain()} className="padding-16px-52px">
            Play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Game;
