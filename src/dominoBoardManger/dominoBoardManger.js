
class DominoNode{
    constructor(row,col){
        this.row = row;
        this.col = col; 
    }
}
class DominoBoardManger{
    constructor(){
        this.validNumbers = [0,1,2,3,4,5,6];
        this.validCelss   = [{row :0, col :0}];
    }
}
export default DominoBoardManger;