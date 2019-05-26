import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"
import DominoGameBoard from "../DominoGameBoard/dominoGameBoard.jsx";
import DominoBoardManger from "../dominoBoardManger/dominoBoardManger.js";
import Statistics from "../statistics/statistics.js"

const INITIAL_DOMINO_VALUES = {
  isDisplayed  : false,
  firstNum     : 1,
  secondNum    : 2,
  isHorizontal : false
};


class DominoBoard extends React.Component{
  constructor(props){
    super(props); 
    // this.dominoBoardManger = new DominoBoardManger(28,28);
    
    //This is an array of the numbers that can be inserted.
    // each entry is a object at this format: {number,isFirstNum ,row,col}
    this.potentialDominos = [];
    this.firstRound = true;
    this.rows = 28;
    this.cols = 28;
    this.state = {
      dominosBoard : this.makeEmptyBoard(),
      validNumbers : [0,1,2,3,4,5,6]
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
  
  whereDominoCanBeinserted(domino){
    if(this.firstRound){
      this.setState({
        validNumbers : [domino.firstNum,domino.secondNum]
      });
      return {number : domino.firstNum, row : 14, col : 14};
    }

    let ans = potentialDominos.find(potential => 
      ((potential.number == domino.firstNum)  && (potential.isFirstNum == true) ||
       (potential.number == domino.secondNum) && (potential.isFirstNum == false)));
    this.updatePotentialDominoes(playerDominoToBeInserted);
    return ans;
  }

  canDominoBeInsertedToGameBoard(domino){
    return this.whereDominoCanBeinserted(domino)!=undefined;
  }


  newGame(){
    this.potentialDominos = [];
    this.firstRound = true;
    this.setState({
      dominosBoard : this.makeEmptyBoard(),
      validNumbers : [0,1,2,3,4,5,6]
    });
  }

  updatePotentialDominoes(domino){
    //Remmember to updateValidNumbers as well & SetState...
    var newValidNumbers = [];
    for (var row = 0; row < this.rows; row++) {
      for (var col = 0; col < this.cols; col++) {
        newValidNumbers[row][col] = INITIAL_DOMINO_VALUES;
      }
    }
  }
  createDominoCellFromPlayerDomino(playerDomino){
    console.log("In createDominoCellFromPlayerDomino" + playerDomino);
    let sameNumOnDomino = false;
    if(playerDomino.firstNum == playerDomino.secondNum){
    let sameNumOnDomino = true;
    }
    return ({
      isDisplayed     : true,
      firstNum        : playerDomino.firstNum,
      secondNum       : playerDomino.secondNum,
      aboveIsAvailable: sameNumOnDomino,
      belowIsAvailable: sameNumOnDomino,
      leftIsAvailable : true,
      rightIsAvailable: true,
      isHorizontal    : playerDomino.isHorizontal
    });
  }

  insertDominoToGameBoard(playerDominoToBeInserted){
    if(this.canDominoBeInsertedToGameBoard(playerDominoToBeInserted)){
      let dominoCell = this.createDominoCellFromPlayerDomino(playerDominoToBeInserted);
      let location = this.whereDominoCanBeinserted(dominoCell);
      this.state.dominosBoard[location.row][location.col] = dominoCell;
      this.setState({dominosBoard : this.state.dominosBoard});
    }
    else{
      console.warn("Tried to insert a cell that was already occupid")
    }
    
  }

  render(){
    return (
      <div className = "board">
        <Statistics/>
        <DominoGameBoard dominosBoard={this.state.dominosBoard}/>
        <PlayerBox validNumbers = {this.state.validNumbers} newGame ={this.newGame.bind(this)} insertDominoToGameBoard ={this.insertDominoToGameBoard.bind(this)}/> 
      </div>
    )
  }
}

export default DominoBoard;