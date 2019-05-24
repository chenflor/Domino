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
        dominos : []
      };
    }

    changeDominos(dominos){
      console.log("Change Doimnos called");

      this.setState({dominos : dominos});
    }

    getNewDominoFromCash(newDomino){
      this.state.dominos.push(newDomino);
      this.setState(this.state.dominos);
    }
    
    

    render() {
      console.log("player box render");
      return (
        <div className = "playerBox">
            <DominoCash changeDominos={this.changeDominos.bind(this)} getNewDominoFromCash={this.getNewDominoFromCash.bind(this)} /> 
            <DominoPieces dominos = {this.state.dominos}/>
        </div>
      );
    }
  }
  export default PlayerBox;