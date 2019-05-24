import React, { Component } from "react";
import cellInBoardTheme from "./cellInBoardTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";


class CellInBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHorizontal : true,
      Domino : null
    };
  }
  
  AddDominoToBoard(newDomino){
    this.setState({Domino : newDomino})
  }

  render() {
    const DOMINO = null;
    if (this.state.Domino != null){
      DOMINO = <DominoPiece firstNum = {this.state.Domino.firstNum} secondNum = {this.state.Domino.secondNum} isHorizontal = {this.state.isHorizontal}/>
    }
    return (
      <div className = "cellInBoard">
        {DOMINO}
      </div>
    );
  }
}
export default CellInBoard;