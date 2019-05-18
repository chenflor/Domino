import React, { Component } from "react";
import dominoPieceTheme from "./dominoPieceTheme.css";

  class DominoPiece extends Component {
  constructor(firstNum,secondNum) {
    super();
    this.firstNum = firstNum;
    this.secondNum = secondNum;
    
  }
  render() {
    return (
      <div className = "dominoPiece">
        <table className = "upSection">
        <tbody>
            <tr className="row">
              <th className="dot"> </th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            <tr className="row">
              <th className="dot"></th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            <tr className="row">
              <th className="dot"></th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            </tbody>
          </table>
          <table className = "buttomSection">
          <tbody>
            <tr className="row">
              <th className="dot"> </th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            <tr className="row">
              <th className="dot"></th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            <tr className="row">
              <th className="dot"></th>
              <th className="dot"></th>
              <th className="dot"></th>
            </tr>
            </tbody>
          </table>
        </div>
    );
  }
}
export default DominoPiece;