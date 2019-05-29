import React, { Component } from "react";
import cellInBoardTheme from "./cellInBoardTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";


class CellInBoard extends Component {
  constructor(props) {
    super(props);
  }
  
  AddDominoToBoard(newDomino){
    this.setState({Domino : newDomino})
  }

  render() {
    let DOMINO = null;
    if (this.props.isDisplayed == true){
      console.log("cellIN/.." + this.props.isPotential);
      DOMINO = <DominoPiece firstNum = {this.props.firstNum} secondNum = {this.props.secondNum} 
      isHorizontal = {this.props.isHorizontal} isPotential = {this.props.isPotential}/>
    }
    return (
      <div className = "cellInBoard">
        {DOMINO}
      </div>
    );
  }
}
export default CellInBoard;