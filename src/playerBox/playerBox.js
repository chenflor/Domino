import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";

class PlayerBox extends Component {
    constructor() {
      super();
      this.state = {
        title: ""
      };
    }

    playerFirstSixDominos = (firstSixDominos) => {
      console.log(firstSixDominos);
    }

    render() {
      return (
        <div className = "playerBox">
            {/* <h2 classNameName = "playersTitle">Player's Box</h2> */}
            <DominoPiece/> 
            <DominoCash parentSixDominos={this.playerFirstSixDominos}/>
        </div>
      );
    }
  }
  export default PlayerBox;