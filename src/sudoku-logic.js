
export function Sudoku( col, row){
  this.col=col;
  this.row=row;
  
  }

  Sudoku.prototype.checkRow = function() {
  var Sudokus =new Array;
  for (var i=0;i<9;i++){
    for (var j=0;j<9;j++){
      col=i;
      row=j;
      if(Sudokus[col][row] != Sudokus[col][row]){
        return "the row is good";
      }

    }
  }
  for (this.col=0;col<9;col++){
    for(this.row=0;row<9;row++ ){
     
    }
    
  }
  }

  Sudoku.prototype.checkCol = function() {
    var Sudokus =new Array;
    for (this.row=0;row<9;row++ ){
      for(this.col=0;col<9;col++){
        if(Sudokus[col][row] != Sudokus[col][row]){
          return "the Col is good";
        }
      }
      
    }
    }

    // Sudoku.prototype.checkSq = function() {
    //   var Sudokus =new Array;
    //   for (this.row=0;row<9;row++ ){
    //     for(this.col=0;col<9;col++){
    //       if(Sudokus[col][row] != Sudokus[col][row]){
    //         return "the Col is good";
    //       }
    //     }
        
    //   }
    //   }
  
