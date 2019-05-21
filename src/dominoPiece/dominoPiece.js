import React, { Component } from "react";
import dominoPieceTheme from "./dominoPieceTheme.css";

  class DominoPiece extends Component {
  constructor(firstNum,secondNum) {
    super();
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    
  }

  setDominoNumbers(dotPlace,number){
    var dotclassName = "dot";
    switch(dotPlace) {
      case 1:
      case 9:
        if(number > 2){
          dotclassName = dotclassName + " visible";
        }
      break;
      case 3:
      case 7:
        if(number > 3){
          dotclassName = dotclassName + " visible";
        }
        break;
      case 4:
      case 6:
        if(number == 2 || number == 6){
          dotclassName = dotclassName + " visible";
        }
        break;
      case 5:
        if(number == 1 || number == 5 || number == 3){
          dotclassName = dotclassName + " visible";
        }
        break;  
      default: null;
    }
        
    return dotclassName;
  }

  render() {
    console.log("Domino Piece Render");
    return (
      <div className = "dominoPiece">
        <table className = "upSection">
        <tbody>
            <tr className="row">
              <th className={this.setDominoNumbers(1,this.firstNum)}> </th>
              <th className={this.setDominoNumbers(2,this.firstNum)}></th>
              <th className={this.setDominoNumbers(3,this.firstNum)}></th>
            </tr>
            <tr className="row">
              <th className={this.setDominoNumbers(4,this.firstNum)}></th>
              <th className={this.setDominoNumbers(5,this.firstNum)}></th>
              <th className={this.setDominoNumbers(6,this.firstNum)}></th>
            </tr>
            <tr className="row">
              <th className={this.setDominoNumbers(7,this.firstNum)}></th>
              <th className={this.setDominoNumbers(8,this.firstNum)}></th>
              <th className={this.setDominoNumbers(9,this.firstNum)}></th>
            </tr>
            </tbody>
          </table>
          <hr className="line"></hr>
          <table className = "buttomSection">
          <tbody>
            <tr className="row">
              <th className={this.setDominoNumbers(1,this.secondNum)}> </th>
              <th className={this.setDominoNumbers(2,this.secondNum)}></th>
              <th className={this.setDominoNumbers(3,this.secondNum)}></th>
            </tr>
            <tr className="row">
              <th className={this.setDominoNumbers(4,this.secondNum)}></th>
              <th className={this.setDominoNumbers(5,this.secondNum)}></th>
              <th className={this.setDominoNumbers(6,this.secondNum)}></th>
            </tr>
            <tr className="row">
              <th className={this.setDominoNumbers(7,this.secondNum)}></th>
              <th className={this.setDominoNumbers(8,this.secondNum)}></th>
              <th className={this.setDominoNumbers(9,this.secondNum)}></th>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
export default DominoPiece;