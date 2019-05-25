import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"
import DominoGameBoard from "../DominoGameBoard/dominoGameBoard.jsx";
import DominoBoardManger from "../dominoBoardManger/dominoBoardManger.js";

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


    this.state = {
      dominosBoard : this.makeEmptyBoard(),
      validNumbers : [0,1,2,3,4,5,6]
    };
  }
  
  makeEmptyBoard() {
    let rows = 28;
    let cols = 28;
    var board = new Array;
    for (var row = 0; row < rows; row++) {
      board[row] = new Array;
      for (var col = 0; col < cols; col++) {
        board[row][col] = INITIAL_DOMINO_VALUES;
      }
    }
    return board;
  }
  
  whereDominoCanBeinserted(domino){
    if(this.firstRound){
      return {number : domino.firstNum, row : 14, col : 14};
    }

    return potentialDominos.find(potential => 
      ((potential.number == domino.firstNum)  && (potential.isFirstNum == true) ||
       (potential.number == domino.secondNum) && (potential.isFirstNum == false)));
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
    //To-DO :)
    //Remmember to updateValidNumbers as well & SetState...
  }
  createDominoCellFromPlayerDomino(playerDomino){
    console.log("In createDominoCellFromPlayerDomino" + playerDomino);
    return ({
      isDisplayed  : true,
      firstNum     : playerDomino.firstNum,
      secondNum    : playerDomino.secondNum,
      isHorizontal : playerDomino.isHorizontal
    });
  }

  insertDominoToGameBoard(playerDominoToBeInserted){
    if(this.canDominoBeInsertedToGameBoard(playerDominoToBeInserted)){
      let location = this.whereDominoCanBeinserted(playerDominoToBeInserted);
      this.updatePotentialDominoes(playerDominoToBeInserted);
      this.state.dominosBoard[location.row][location.col] = this.createDominoCellFromPlayerDomino(playerDominoToBeInserted);
      this.setState({dominosBoard : this.state.dominosBoard});
    }
    else{
      console.warn("Tried to insert a cell that was already occupid")
    }
    
  }

  render(){
    return (
      <div className = "board">
        <DominoGameBoard dominosBoard={this.state.dominosBoard}/>
        <PlayerBox validNumbers = {this.state.validNumbers} newGame ={this.newGame.bind(this)} insertDominoToGameBoard ={this.insertDominoToGameBoard.bind(this)}/> 
      </div>
    )
  }
}

export default DominoBoard;