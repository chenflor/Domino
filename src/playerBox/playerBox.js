import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";

class PlayerBox extends Component {
    constructor() {
      super();
      console.log("HELLO");
      this.state = {
        title: "",
        dominos : []
      };
    }

    changeDominos(dominos){
      console.log("Change Doimnos called");
      console.log("Change Doimnos called");
      this.setState({dominos : dominos});
    }

    getNewDominoFromCash(newDomino){
      console.log("in get new domino");
      for(var i=0;i<this.state.dominos.length;i++){
        if(!this.state.dominos[i]){
          this.state.dominos[i] = newDomino;
          console.log(this.state.dominos[i]);
          break;
        }
      }
    }
    
    displayDominos(){
      console.log("Display Doimnos called");
      console.log(this.state.dominos);
      if (Array.isArray(this.state.dominos)){
        console.log("is an Araay");
        const displayedDominos = this.state.dominos.map(
          domino =>
          (<div key={domino.firstNum.toString() + domino.secondNum.toString()}>
            <DominoPiece firstNum = {domino.firstNum} secondNum = {domino.secondNum} />
          </div>));
        return (
        <React.Fragment>
          {displayedDominos}
        </React.Fragment>
        );
      }
      else{
        return null;
      }
    
    }

    render() {
      console.log("player box render");
      return (
        <div className = "playerBox">
            {/* <h2 classNameName = "playersTitle">Player's Box</h2> */}
            <DominoCash changeDominos={this.changeDominos.bind(this)} getNewDominoFromCash={this.getNewDominoFromCash.bind(this)} /> 
            <div className = "myDominos">{this.displayDominos()}</div>
            
        </div>
      );
    }
  }
  export default PlayerBox;