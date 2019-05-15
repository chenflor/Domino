import React, { Component } from "react";
import dominoPieceTheme from "./dominoPieceTheme.css";

  class DominoPiece extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <div className = "dominoPiece">
        <table className = "upSection">
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
          </table>
          <table className = "buttomSection">
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
          </table>
        </div>
    );
  }
}
export default DominoPiece;