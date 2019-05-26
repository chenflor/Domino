import React, { Component } from "react";
import statisticsTheme from "./statisticsTheme.css";


class Statistics extends Component {
  constructor(i,j) {
    super();
    this.state = {
        numOfTurns: 0,
        timeFromGameStart: 0,
        avgTimeForPlayerTurn: 0,
        numOfTimesPlayerTookFromCash: 0,
        playerScore: 0
    };
  }


  render() {
    return (
      <div className = "statistics">
          <h1>Statistics:</h1>
          <ul key="statTable">
            <li key="numOfTurns">Num Of Turns: <div>{this.state.numOfTurns}</div></li>
            <li key="timeFromGameStart">Time From Game Start:  <div>{this.state.timeFromGameStart}</div></li>
            <li key="avgTimeForPlayerTurn">Avg Time For Player Turn:  <div>{this.state.avgTimeForPlayerTurn}</div></li>
            <li key="numOfTimesPlayerTookFromCash">Num Of Times Player Took From Cash:  <div>{this.state.numOfTimesPlayerTookFromCash}</div></li>
            <li key="playerScore">Player Score:  <div>{this.state.playerScore}</div></li>
        </ul>
      </div>
    );
  }
}
export default Statistics;