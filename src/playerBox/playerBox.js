import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";
import DominoPieces from "../dominoPieces/dominoPieces";

class PlayerBox extends Component {
    constructor() {
      super();
      console.log("HELLO");
      this.state = {
        playerDominos : []
      };
    }

    changeDominos(dominos){
      console.log("Change Doimnos called");

      this.setState({playerDominos : dominos});
    }

    getNewDominoFromCash(newDomino){
      if (newDomino){
        this.state.playerDominos.push(newDomino);
        this.setState(this.state.playerDominos);
      }
      else{
        alert("No Dominos left in Cash");
      }
      
    }
    
    

    render() {
      console.log("player box render");
      return (
        <div className = "playerBox">
            <DominoCash changeDominos={this.changeDominos.bind(this)} getNewDominoFromCash={this.getNewDominoFromCash.bind(this)} /> 
            <DominoPieces dominos = {this.state.playerDominos}/>
        </div>
      );
    }
  }
  export default PlayerBox;