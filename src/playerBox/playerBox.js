import React, { Component } from "react";
import playerBoxTheme from "./playerBoxTheme.css";
import DominoPiece from "../dominoPiece/dominoPiece";
import DominoCash from "../dominoCash/dominoCash";

class PlayerBox extends Component {
    constructor() {
      super();
      console.log("HELLO");
      this.state = {
        title: "",
        dominos : []
      };
    }

    changeDominos(dominos){
      console.log("Change Doimnos called");
      this.setState({dominos})
    }
    
    displayDominos(){
      console.log("Display Doimnos called");

      if (Array.isArray(this.dominos)){
        const displayedDominos = this.dominos.map(domino => <div>{domino}</div>);
        return (
        <React.Fragment>
          {displayedDominos}
        </React.Fragment>
        );
      }
      else{
        return null;
      }
    
    }

    render() {
      console.log("player box render");
      return (
        <div className = "playerBox">
            {/* <h2 classNameName = "playersTitle">Player's Box</h2> */}
            <DominoPiece/> 
            <DominoCash changeDominos={this.changeDominos.bind(this)}/> 
            {this.displayDominos()}
        </div>
      );
    }
  }
  export default PlayerBox;