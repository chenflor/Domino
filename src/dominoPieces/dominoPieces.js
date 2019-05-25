import React from "react";
import propTypes from "prop-types"
import DominoPiece from "../dominoPiece/dominoPiece";
import dominoPiecesTheme from "./dominoPiecesTheme.css";

function DominoPieces(props){
    console.log("in domino pieces");
    console.log(props.dominos);
    return (
        <div className = "dominoPieces">
            {props.dominos.map(domino => <DominoPiece key={domino.firstNum.toString() +domino.secondNum.toString()} firstNum = {domino.firstNum} secondNum = {domino.secondNum}/>)}
        </div>

    )

}

DominoPieces.propTypes ={
    dominos : propTypes.array
}

export default DominoPieces;