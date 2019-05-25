import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";
import DominoPieces from "../dominoPieces/dominoPieces";
import DominoUtils from "../dominoUtils/dominoUtils";




class PlayerBox extends Component {
    constructor() {
      super();
      console.log("HELLO");
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
      if (newDomino){
        this.state.playerDominos.push(newDomino);
        this.state.selectedDomino = newDomino;
        this.setState({playerDominos : this.state.playerDominos, selectedDomino :newDomino});
      }
      else{
        alert("No Dominos left in Cash");
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
      if(this.state.selectedDomino!=undefined && this.state.playerDominos.some(domino => DominoUtils.isDominoEqual(domino,this.state.selectedDomino))){
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
      return (
        <div className = "playerBox">
            <DominoCash 
            changeDominos={this.changeDominos.bind(this)} 
            getNewDominoFromCash={this.getNewDominoFromCash.bind(this)} 
            newGame = {this.props.newGame}
            insertDominoToGameBoard = {this.insertDominoToGameBoard.bind(this)}/> 
            <DominoPieces dominos = {this.state.playerDominos} selectedDomino = {this.state.selectedDomino} setSelected ={this.setSelected.bind(this)}/>
        </div>
      );
    }
  }
  export default PlayerBox;
