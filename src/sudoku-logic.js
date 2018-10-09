export function Sudoku (row1, row2, row3, row4, row5, row6, row7, row8, row9){
  
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

export function Row(one, two, three, four, five, six, seven, eight, nine){
this.one = one;
this.two = two;
this.three = three;
this.four = four;
this.five = five;
this.six = six;
this.seven = seven;
this.eight = eight;
this.nine = nine;
}

Row.prototype.checkRow = function (){
  var rowArr = Object.values(this);
  var count = 0
  for(var num=1; num <= 9; num++){
    if (rowArr.includes(num)){
      count = count + 1;
    }
  }
  return count;
}