import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";
import DominoPieces from "../dominoPieces/dominoPieces";
import DominoUtils from "../dominoUtils/dominoUtils";




class PlayerBox extends Component {
    constructor() {
      super();
      // console.log("HELLO");
      this.maxNumberOfDominos = 6;
      this.state = {
        playerDominos : [],
        selectedDomino : undefined
      };
    }

    changeDominos(dominos){
      console.log("Change Doimnos called");

      this.setState({playerDominos : dominos, selectedDomino : dominos[0]});
    }

    getNewDominoFromCash(newDomino){
      if(this.state.playerDominos.length >= this.maxNumberOfDominos){
        alert("Player can have up to 6 domino pieces");
      }
      else if(!newDomino){
        alert("No Dominos left in Cash");
      }
      else{
        this.state.playerDominos.push(newDomino);
        this.state.selectedDomino = newDomino;
        this.setState({playerDominos : this.state.playerDominos, selectedDomino :newDomino});
      }
      
      
    }

    removeFromplayerDominos(dominoToBeRemoved){
      var index = this.state.playerDominos.indexOf(dominoToBeRemoved);
      if (index > -1) {
        this.state.playerDominos.splice(index, 1);
        this.setState({
          playerDominos : this.state.playerDominos
        });
}
    }
    insertDominoToGameBoard(){
      console.log("In insertDominoToGameBoard ");
      if(this.state.selectedDomino!=undefined && 
        this.state.playerDominos.some(domino => DominoUtils.isDominoEqual(domino,this.state.selectedDomino))&&
        (this.props.validNumbers.includes(this.state.selectedDomino.firstNum)||
        this.props.validNumbers.includes(this.state.selectedDomino.secondNum))){
        let tmpPiece = this.state.selectedDomino;
        this.removeFromplayerDominos(this.state.selectedDomino);
        this.setState({selectedDomino : this.state.playerDominos[0]});
        this.props.insertDominoToGameBoard(tmpPiece);
      }
      else{
        console.warn("no domino can be inserted");
      }
      
    }

    findDominoInPlayerDomino(someDomino){
      for(var i=0; i<this.state.playerDominos.length; i++ ){
        if(DominoUtils.isDominoEqual(someDomino,this.state.playerDominos[i])){
          return this.state.playerDominos[i];
        }
      }
      return null;
    }
    setSelected(selectedDomino){
      console.log(selectedDomino);
      console.log(this.state.playerDominos);
      console.log("In playerBox selectedDomino" + selectedDomino);
      if(selectedDomino!=undefined && this.state.playerDominos.some(domino => DominoUtils.isDominoEqual(domino,selectedDomino))){
        console.log("Finally");
        let tmp = this.findDominoInPlayerDomino(selectedDomino);
        console.log("New Selected is "+ tmp);
        this.setState({selectedDomino : tmp});
      }
    }
    
    

    render() {
      console.log("player box render");
      console.log(this.props.validNumbers);
      return (
        <div className = "playerBox">
            <DominoCash 
            changeDominos={this.changeDominos.bind(this)} 
            getNewDominoFromCash={this.getNewDominoFromCash.bind(this)} 
            newGame = {this.props.newGame}
            numOfTimesPlayerTookFromCash  = {this.props.numOfTimesPlayerTookFromCash}
            insertDominoToGameBoard = {this.insertDominoToGameBoard.bind(this)}/> 
            <DominoPieces 
            dominos = {this.state.playerDominos} 
            selectedDomino = {this.state.selectedDomino} 
            validNumbers = {this.props.validNumbers}
            setSelected ={this.setSelected.bind(this)}/>
        </div>
      );
    }
  }
  export default PlayerBox;
