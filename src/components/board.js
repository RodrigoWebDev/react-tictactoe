import React, {useState, useEffect} from 'react'
import Square from './square'

const Board = () => {
  const [squares, seSquares] = useState([])
  const [xIsNext, setXIsNext] = useState(true)
  const [status, setStatus] = useState("")
  const [gameOver, setGameOver] = useState(false)

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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

  const handleClick = (i) => {
    if(gameOver === false){
      const tempSquares = [...squares];
      const turn = xIsNext ? 'X' : 'O';

      if(!tempSquares[i]) tempSquares[i] = turn;
      
      seSquares(tempSquares)
      setXIsNext(!xIsNext)

      if (calculateWinner(tempSquares)){
        console.log("xIsNext", xIsNext)
        setStatus(`Winner: ${turn}`)
        setGameOver(true)
      }
    }
  }

  const renderSquare = (i) =>
      <Square
        value={squares[i]}
        onClick={() =>
          handleClick(i)}
      />

  const check = (arr) => {
    for(var i=0; i<arr.length; i++){
      if(typeof arr[i] != "string" && calculateWinner === null) {
        return false;
      }
    }
    setStatus("No winner")
  }

  useEffect(() => {
    seSquares(Array(9).fill(null))
    console.log("squares", squares)
  }, [])

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
  )
}

export default Board
