var exist = function(board, word) {
  if (word.length === 0) {
    return [];
  }

  var wordSearch = function(row, col, board, index) {
    if (
      row < 0 ||
      row > board.length - 1 ||
      col < 0 ||
      col > board[0].length - 1 ||
      board[row][col] !== word[index] ||
      board[row][col] === "#"
    ) {
      return false;
    }
    if (index === word.length - 1) {
      return true;
    }
    var letterCopy = board[row][col];
    board[row][col] = "#"; //mark as visited

    if (wordSearch(row - 1, col, board, index + 1)) return true;
    if (wordSearch(row + 1, col, board, index + 1)) return true;
    if (wordSearch(row, col - 1, board, index + 1)) return true;
    if (wordSearch(row, col + 1, board, index + 1)) return true;

    board[row][col] = letterCopy;
    return false;
  };

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (wordSearch(i, j, board, 0)) return true;
    }
  }

  return false;
};
