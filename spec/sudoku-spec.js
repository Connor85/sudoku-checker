import { Sudoku } from '../src/sudoku-logic.js';

describe('Sudoku', function() {

  
    it('should correctly determine whether the ROW is GOOD', function(){
      //var RowIsWrong=
      var SudokuItem = new Sudoku(0,0);
      var SudokuItem1 = new Sudoku(0,1);

      expect(notTriangle.checkRow()).toEqual("the row is good");
    });



  
  });