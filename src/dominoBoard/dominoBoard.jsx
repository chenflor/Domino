import React, { Component } from "react";
import dominoBoardTheme from "./dominoBoardTheme.css";
import PlayerBox from "../playerBox/PlayerBox.js"
import DominoGameBoard from "../DominoGameBoard/dominoGameBoard.jsx";


function DominoBoard(props){
  return (
    <div className = "board">
      <DominoGameBoard/>
      <PlayerBox/> 
    </div>
  )
}

export default DominoBoard;