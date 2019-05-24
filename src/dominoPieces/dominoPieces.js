import React from "react";
import DominoPiece from "../dominoPiece/dominoPiece";

function DominoPieces(props){
    console.log("in domino pieces");
    console.log(props.dominos);
    return (
        <div className = "dominoPieces">
            {props.dominos.map(domino => <DominoPiece key={domino.firstNum.toString() +domino.secondNum.toString()} firstNum = {domino.firstNum} secondNum = {domino.secondNum}/>)}
        </div>

    )

}

export default DominoPieces;