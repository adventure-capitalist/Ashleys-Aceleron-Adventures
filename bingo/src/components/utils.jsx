

  function shuffleBoard(board){
    const FREE_SPACE = 12;
    const newBoard = board.slice();
    const freeValue = newBoard.splice(FREE_SPACE, 1);
    
    let m = newBoard.length, t, i;
    
    while(m) {
      i = Math.floor(Math.random() * m--);
  
      t = newBoard[m];
      newBoard[m] = newBoard[i];
      newBoard[i] = t;  
    }
    
    newBoard.splice(FREE_SPACE, 0, freeValue);
      
    return newBoard;  
  }

  function checkBoard(board) {
    var checks = [
        [ 0, 1, 2, 3, 4],
        [ 5, 6, 7, 8, 9],
        [10,11,12,13,14],
        [15,16,17,18,19],
        [20,21,22,23,24],
        [ 0, 5,10,15,20],
        [ 1, 6,11,16,21],
        [ 2, 7,12,17,22],
        [ 3, 8,13,18,23],
        [ 4, 9,14,19,24],
        [ 0, 6,12,18,24],
        [ 4, 8,12,16,20],
      ];
    
    for(let i = 0; i < checks.length; i++) {
      let match = true;
      for(let j = 0; j < checks[i].length; j++) {
        if(!board[checks[i][j]]) {
          match = false;
          break;
        }
      }
      if(match) {
        return true;
      }
    }
    return false;
  }

  module.exports = {
      shuffleBoard: shuffleBoard,
      checkBoard: checkBoard

  }
  