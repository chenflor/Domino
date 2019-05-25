import React, { Component } from "react";
import dominoGameBoardTheme from "./dominoGameBoardTheme.css";
import CellInBoard from "../cellInBoard/cellInBoard.js"

const INITIAL_DOMINO_VALUES = {
    isDisplayed  : true,
    firstNum     : 1,
    secondNum    : 2,
    isHorizontal : false
};

class DominoGameBoard extends Component {
  constructor(props) {
    super(props);
    this.rows = 28;
    this.cols = 28;
    this.state = {
      dominosBoard: this.makeEmptyBoard()
    };
  }

    

  makeEmptyBoard() {
    var board = new Array;
    for (var row = 0; row < this.rows; row++) {
      board[row] = new Array;
      for (var col = 0; col < this.cols; col++) {
        board[row][col] = INITIAL_DOMINO_VALUES;
      }
    }
    return board;
  }

  insertCellToBoard(cellToBeInserted){
    dominosBoard[cellToBeInserted.row][cellToBeInserted.col] = cellToBeInserted;
  }

  displayCell(DominoGameCell){
    console.log("In DisplayCell" + DominoGameCell);
    if(DominoGameCell.isDisplayed){
        console.log("Display Domino in game Board with firstNum=" + DominoGameCell.firstNum + "SecondDnum"+ DominoGameCell.secondNum);
        return(
            <CellInBoard 
                isDisplayed  = {DominoGameCell.isDisplayed} 
                firstNum     = {DominoGameCell.firstNum} 
                secondNum    = {DominoGameCell.secondNum} 
                isHorizontal = {DominoGameCell.isHorizontal}/>
        );
    }
    else{
        return (<div></div>);
    }
  }

  render() {
      console.log(this.state.dominosBoard);
    return (
        <div className = "playingBoard">
            {this.state.dominosBoard.map(function(dominoGameCells){
                return(
                    <div className="playingBoardRow">  
                        {(dominoGameCells.map(function(dominoGameCell) {
                            return(this.displayCell(dominoGameCell));
                        }.bind(this)))}
                    </div>
                    );
            }.bind(this))}
    </div>
    );
  }
}
export default DominoGameBoard;