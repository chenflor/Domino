import React, { Component } from "react";
//import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import * as math from 'mathjs'

class DominoCash extends Component {

  initDominoCashArray(){
    //Initializing a 28 pieces domino array.
    let index = 0;
    for(var i=0; i<=6;i++){
      for(var j = i;j<=6;j++){
        this.dominosCashArray[index] = new DominoPiece(i,j);
        index +=1;
        if(index > this.length){
          console.log("There is a bug in the code - too many pieces are initialized");
          return;
        }
      }
    }
  }

    constructor() {
      super();
      this.length = 28;
      this.dominosCashArray = [];
      this.initDominoCashArray(); 
    }

    getARandomDomino(){
        var max = this.length;
        var min = 0;
        var index = math.floor(Math.random()*(max-min+1)+min);
        var ans = this.dominosCashArray[index];
        var tempArray = [];
        var j = 0;
        for(var i = 0; i<this.length-1; i++){
            if(j == index){
                j = j+1;
            }
            tempArray[i] = this.dominosCashArray[j];
            j = j+1;
        }
        this.dominosCashArray = tempArray;
        this.length = this.length - 1;
        return ans;
    }

    newGame(){
        var newSixDominos = [];
        for(var i = 0; i< 6 ;i++){
            newSixDominos[i] = this.getARandomDomino();
        }
        console.log(newSixDominos);
        this.props.changeDominos(newSixDominos);
    }

    render() {
      console.log("dominoCash renderer");
      return (
        <div className = "dominoCash">
            <button onClick={this.newGame.bind(this)}>New Game</button>
        </div>
      );
    }
}
  
  export default DominoCash;