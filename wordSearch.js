var exist = function(board, word) {
  var boggle = function(i, j, board, path) {
    if (
      i < 0 ||
      i > board.length - 1 ||
      j < 0 ||
      j > board[0].length - 1 ||
      board[i][j] !== word[path] ||
      board[i][j] === "#"
    ) {
      return false;
    }
    if (path === word.length - 1) {
      return true;
    }
    var letterCopy = board[i][j];
    board[i][j] = "#";
    if (boggle(i - 1, j, board, path + 1)) return true;
    if (boggle(i, j + 1, board, path + 1)) return true;
    if (boggle(i + 1, j, board, path + 1)) return true;
    if (boggle(i, j - 1, board, path + 1)) return true;
    board[i][j] = letterCopy;
    return false;
  };

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (boggle(i, j, board, 0)) {
        return true;
      }
    }
  }

  return false;
};
