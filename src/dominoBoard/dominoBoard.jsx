import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"

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
    for (var y = 0; y < this.rows; y++) {
      board[y] = [];
      for (var x = 0; x < this.cols; x++) {
        board[y][x] = (<div key = {y.toString() + x.toString()} className = 'cell'> 
        hi</div>);
      }
    }
    return board;
  }

  render() {
    // console.log(cell);
    return (
      <div className = "board">
        <div className = "playingBoard">
        {this.state.dominosBoard.map((row) => 
          row.map((cell) => cell))} </div>
        <PlayerBox/> 
      </div>
    );
  }
}
export default DominoBoard;