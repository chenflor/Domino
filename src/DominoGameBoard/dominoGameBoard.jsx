import React, { Component } from "react";
import dominoGameBoardTheme from "./dominoGameBoardTheme.css";
import CellInBoard from "../cellInBoard/cellInBoard.js"



class DominoGameBoard extends Component {
  constructor(props) {
    super(props);
    
  }

  displayCell(DominoGameCell){
    // console.log("In DisplayCell" + DominoGameCell);
    if(DominoGameCell.isDisplayed){
        console.log("Display Domino in game Board with firstNum=" + DominoGameCell.firstNum + "SecondDnum"+ DominoGameCell.secondNum);
        return(
            <CellInBoard 
                isDisplayed  = {DominoGameCell.isDisplayed} 
                firstNum     = {DominoGameCell.firstNum} 
                secondNum    = {DominoGameCell.secondNum} 
                isHorizontal = {DominoGameCell.isHorizontal}/>
        );
    }
    else{
        return (<div></div>);
    }
  }

  render() {
    return (
        <div className = "playingBoard">
            {this.props.dominosBoard.map(function(dominoGameCells){
                return(
                    <div className="playingBoardRow">  
                        {(dominoGameCells.map(function(dominoGameCell) {
                            return(this.displayCell(dominoGameCell));
                        }.bind(this)))}
                    </div>
                    );
            }.bind(this))}
    </div>
    );
  }
}
export default DominoGameBoard;