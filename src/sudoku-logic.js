export function Sudoku (){
  var gameBoard = [
    [1],[2],[3],
    [4],[5],[6],
    [7],[8],[9],
];
var row = function (row1, row2, row3, row4, row5, row6, row7, row8, row9){
  this.row1 = row1;
  this.row2 = row2;
  this.row3 = row3;
  this.row4 = row4;
  this.row5 = row5;
  this.row6 = row6;
  this.row7 = row7;
  this.row8 = row8;
  this.row9 = row9;
}

// var column = function (column1, column2, column3, column4, column5, column6, column7, column8, column9){
//   this.column1 = column1;
//   this.column2 = column2;
//   this.column3 = column3;
//   this.column4 = column4;
//   this.column5 = column5;
//   this.column6 = column6;
//   this.column7 = column7;
//   this.column8 = column8;
//   this.column9 = column9;
// }
}

Sudoku.prototype.checkRow = function (){

}