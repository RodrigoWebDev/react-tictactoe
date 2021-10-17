import React from 'react'
import Board from './board'

const Game = () => 
  <div className="game">
    <h1 className="game__title">Tic Tac Toe Game</h1>
    <div className="game-board">
      <Board />
    </div>
  </div>

export default Game
