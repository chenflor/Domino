import React, { Component } from "react";
import cellInBoardTheme from "./cellInBoardTheme.css";


class CellInBoard extends Component {
  constructor(i,j) {
    super();
    this.i = 28;
    this.j = 28;
    this.state = {
    };
  }


  render() {
    return (
      <div className = "cellInBoard">
      </div>
    );
  }
}
export default CellInBoard;