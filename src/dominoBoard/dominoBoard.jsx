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
    // each entry is a object at this format: {number ,row,col, isFirstNum}
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
    let ans;
    if(this.firstRound){
      ans = {row : 14, col : 14};
    }
    for(var i=0;i<this.potentialDominos.length;i++){
      let potential = this.potentialDominos[i];
      let endLoop, reverse;
      if((this.potentialDominos[i].number == domino.firstNum)){
        reverse = potential.isFirstNum;
        endLoop = true;
      }
      else if(this.potentialDominos[i].number == domino.secondNum){
        reverse = !potential.isFirstNum;
        endLoop = true;
        
      }
      ans =  {row : this.potentialDominos[i].row, col: this.potentialDominos[i].col};
      if (endLoop){
        if (reverse){
          let tmp = domino.firstNum;
          domino.firstNum = domino.secondNum;
          domino.secondNum =  tmp;
        }
        
        break;
      }
      
    }
    
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

  isDoubleDomino(domino){
    if(domino.firstNum == domino.secondNum){
        return true;
    }
    return false;
  }

  createPotentialCell(number,row,col,isFirstNum){
    return(
      {
        number : number,
        row    : row,
        col    : col,
        isFirstNum : isFirstNum
      }
    );
  }
  _addToPotentialAroundDomino(domino,row,col){
    this.potentialDominos.push(this.createPotentialCell(domino.firstNum,row,col-1, true));
    this.potentialDominos.push(this.createPotentialCell(domino.secondNum,row,col+1, false));
    if(this.isDoubleDomino(domino)){
      this.potentialDominos.push(this.createPotentialCell(domino.firstNum,row-1,col,true));
      this.potentialDominos.push(this.createPotentialCell(domino.secondNum,row-1,col,false));
    }
  }
  updatePotentialDominoes(domino,row,col ){
    
    //Remmember to updateValidNumbers as well & SetState...
    if(this.potentialDominos.length == 0){
      this._addToPotentialAroundDomino(domino,row,col);
      
    }
    else{
      let tmpArr =[];
      this._addToPotentialAroundDomino(domino,row,col);
      console.log("potentialDomino"+ this.potentialDominos);
      console.log(this.state.dominosBoard);
      for(var i =0; i<this.potentialDominos.length;i++){
        let potentialDomino = this.potentialDominos[i];
        if(this.state.dominosBoard[potentialDomino.row][potentialDomino.col].isDisplayed == false){
          tmpArr.push(potentialDomino);
        }
      }
      this.potentialDominos = tmpArr;
     
    }
    let validNumbers = [];
    this.potentialDominos.forEach(
      (potential)=>{if (validNumbers.indexOf(potential.number)==-1) validNumbers.push(potential.number)});
    this.setState({validNumbers:validNumbers});
    console.log(this.state.validNumbers);
         
  }
  createDominoCellFromPlayerDomino(playerDomino){
    console.log("In createDominoCellFromPlayerDomino" + playerDomino);
    return ({
      isDisplayed     : true,
      firstNum        : playerDomino.firstNum,
      secondNum       : playerDomino.secondNum,
      isHorizontal    : playerDomino.isHorizontal
    });
  }

  insertDominoToGameBoard(playerDominoToBeInserted){
    if(this.canDominoBeInsertedToGameBoard(playerDominoToBeInserted)){
      let dominoCell = this.createDominoCellFromPlayerDomino(playerDominoToBeInserted);
      let location = this.whereDominoCanBeinserted(dominoCell);
      if(location){
        this.state.dominosBoard[location.row][location.col] = dominoCell;
        this.setState({dominosBoard : this.state.dominosBoard});
        console.log("dominosBoard"+this.state.dominosBoard);
        this.updatePotentialDominoes(playerDominoToBeInserted,location.row,location.col);
      }  
    }
    else{
      console.warn("Tried to insert a cell that was already occupid");
    }
    if(this.firstRound){
      this.firstRound = false;
    }
    
  }

  setSelected(){
    //calc Actual potential

  }

  render(){
    return (
      <div className = "board">
        <Statistics/>
        <DominoGameBoard dominosBoard={this.state.dominosBoard}/>
        <PlayerBox 
        validNumbers = {this.state.validNumbers} 
        newGame ={this.newGame.bind(this)} 
        insertDominoToGameBoard ={this.insertDominoToGameBoard.bind(this)}
        setSelected = {this.setSelected.bind(this)}/> 
      </div>
    )
  }
}

export default DominoBoard;