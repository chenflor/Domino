import React, { Component } from "react";
//import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import * as math from 'mathjs'

class DominoCash extends Component {

    constructor() {
      super();
      this.length = 28;
      this.dominosCashArray = [];
        var index = 0;
        var i = 0;
        var j = 0;
        while(index <= this.length){
            this.dominosCashArray[index] = new DominoPiece(i,j);
          if(j == 6){
              j = i;
              i = i + 1;
          }
          j = j + 1;
          index = index + 1;
        }
      console.log(this.dominosCashArray);
    //   this.state = {
    //     dominosCash: dominosCashArray
    //   };
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
        console.log(this.dominosCashArray);
        return ans;
    }

    newGame(){
        var newSixDominos = [];
        for(var i = 0; i< 6 ;i++){
            newSixDominos[i] = this.getARandomDomino();
        }
        console.log(newSixDominos);
        return newSixDominos;
    }

    render() {
      return (
        <div className = "dominoCash">
            <button onClick={this.newGame.bind(this)}>New Game</button>
        </div>
      );
    }
}
  
  export default DominoCash;