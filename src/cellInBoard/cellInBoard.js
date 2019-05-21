import React, { Component } from "react";
import cellInBoardTheme from "./cellInBoardTheme.css";


class CellInBoard extends Component {
  constructor(row,coulmn) {
    super();
    this.row = row;
    this.coulmn = coulmn;
    this.state = {
      isHorizontal : true,
      Domino : null
    };
  }
  
  AddDominoToBoard(newDomino){
    this.setState({Domino : newDomino})
  }

  change

  render() {
    if (this.state.Domino != null){
      <Domino/>
    }
    return (
      <div className = "cellInBoard">
      </div>
    );
  }
}
export default CellInBoard;