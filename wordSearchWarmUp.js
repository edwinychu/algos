const wordSearchWarmup = (board, word) => {
  
  if (word.length === 0) {
    return true;
  }

  const boggle = (board, i, j, path) => {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1 || !board[i][j] || board[i][j] !== word[path]) {
      return false;
    }
    let letterCopy = board[i][j];
    board[i][j] = 0;
    if (path === word.length - 1) {
      return true;
    }

    if (boggle(board, i-1, j, path + 1)) return true;
    if (boggle(board, i+1, j, path + 1)) return true;
    if (boggle(board, i, j -1 , path + 1)) return true;
    if (boggle(board, i, j + 1, path + 1)) return true;

    board[i][j] = letterCopy;
    return false;
  }
 
  for (var i=0; i<board.length; i++) {
    for (var j=0; j<board[0].length; j++) {
      if (boggle(board, i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}