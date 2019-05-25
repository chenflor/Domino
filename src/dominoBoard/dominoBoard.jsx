import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"
import CellInBoard from "../cellInBoard/cellInBoard.js"

class DominoBoard extends Component {
  constructor() {
    super();
    this.rows = 28;
    this.cols = 28;
    this.state = {
      dominosBoard: this.makeEmptyBoard()
    };
  }

  makeEmptyBoard() {
    var board = [];
    for (var row = 0; row < this.rows; row++) {
      board[row] = [];
      for (var col = 0; col < this.cols; col++) {
        board[row][col] = new CellInBoard(row,col);
      }
    }
    return board;
  }

  insertCellToBoard(cellToBeInserted){
    dominosBoard[cellToBeInserted.row][cellToBeInserted.col] = cellToBeInserted;
  }

  render() {
    // console.log(cell);
    return (
      <div className = "board">
        <div className = "playingBoard">
          {this.state.dominosBoard.map((row) => 
            row.map((cell) => cell.render()))} 
        </div>
        <PlayerBox/> 
      </div>
    );
  }
}
export default DominoBoard;