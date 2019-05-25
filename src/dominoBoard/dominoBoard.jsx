import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"
import DominoGameBoard from "../DominoGameBoard/dominoGameBoard.jsx";
// import DominoBoardManger from "../dominoBoardManger/dominoBoardManger";

class DominoBoard extends React.Component{
  constructor(props){
    super(props);
    // DominoBoardManger = new DominoBoardManger(28,28);
    
  }

  render(){
    return (
      <div className = "board">
        <DominoGameBoard/>
        <PlayerBox/> 
      </div>
    )
  }
}

export default DominoBoard;