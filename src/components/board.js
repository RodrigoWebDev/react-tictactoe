import React, { useState, useEffect } from "react";
import Square from "./square";

const Board = ({
  gameOver,
  setGameOver,
  squares,
  setSquares,
  xIsNext,
  setXIsNext,
  status,
  setStatus,
  setXScore,
  setOScore,
}) => {
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
  };

  const checkDraw = (squares) => {
    return squares.every((item) => item !== null);
  };

  const handleClick = (i) => {
    if (gameOver === false) {
      const tempSquares = [...squares];
      if (!tempSquares[i]) {
        const turn = xIsNext ? "X" : "O";

        if (!tempSquares[i]) tempSquares[i] = turn;

        if (checkDraw(tempSquares)) {
          setStatus(`Draw!`);
          setGameOver(true);
        }

        setSquares(tempSquares);
        setXIsNext(!xIsNext);

        if (calculateWinner(tempSquares)) {
          setStatus(`Winner: ${turn}`);
          setGameOver(true);
          if (turn === "X") {
            setXScore((val) => val + 1);
          } else {
            setOScore((val) => val + 1);
          }
        }
      }
    }
  };

  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => handleClick(i)} />
  );

  useEffect(() => {
    setSquares(Array(9).fill(null));
  }, []);

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
