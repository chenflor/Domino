import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"

class DominoBoard extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div className = "board">
              <PlayerBox/> 
      </div>
    );
  }
}
export default DominoBoard;