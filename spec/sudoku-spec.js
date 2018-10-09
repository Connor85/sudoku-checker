import { Row } from '../src/sudoku-logic.js';

describe('Sudoku', function() {

    it('should correctly determine whether the ROW is 9 units', function(){
      var row = new Row (1,2,3,4,5,6,7,8,9);
      expect(row.checkRow()).toEqual(9);
    });

  });