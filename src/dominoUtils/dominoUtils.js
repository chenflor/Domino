function DominoUtils(){}
DominoUtils.isDominoEqual =function(domino,otherDomino)
    {
      if(domino && otherDomino){
        return (domino.firstNum == otherDomino.firstNum && domino.secondNum == otherDomino.secondNum);
      }
      else{
        console.log("Tried assinging domino without a valid object");
        console.log(domino);
        console.log(otherDomino);
        return domino ==otherDomino;
      }
    };

export default DominoUtils;