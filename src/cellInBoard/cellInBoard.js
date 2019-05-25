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
      DOMINO = <DominoPiece firstNum = {this.props.firstNum} secondNum = {this.props.secondNum} isHorizontal = {this.props.isHorizontal}/>
    }
    return (
      <div className = "cellInBoard">
        {DOMINO}
      </div>
    );
  }
}
export default CellInBoard;