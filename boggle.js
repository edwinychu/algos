const boggle = (board, wordList) => {
  let results = [];
  
  for (let i=0; i<wordList.length; i++) {
    if (wordSearch(board, wordList[i]) && !results.includes(wordList[i])) {
      results.push(wordList[i]);
    }
  }

  return results;
}

const wordSearch = (board, word) => {
  const recurse = (board, i, j, path) => {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1 || !board[i][j] || board[i][j] !== word[path]) {
      return false;
    }
    if (path === word.length - 1) {
      return true;
    }
    const letterCopy = board[i][j];
    board[i][j] = 0;

    if (recurse(board, i - 1, j, path + 1)) {
      board[i][j] = letterCopy;
      return true;
    }
    if (recurse(board, i + 1, j, path + 1)) {
      board[i][j] = letterCopy;
      return true;
    }
    if (recurse(board, i, j - 1, path + 1)) {
      board[i][j] = letterCopy;
      return true;
    } 
    if (recurse(board, i, j + 1, path + 1)) {
      board[i][j] = letterCopy;
      return true;
    } 

    board[i][j] = letterCopy;
    return false;
  }

  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      if (recurse(board, i, j, 0)) return true;
    }
  }
  return false;
}

const board2 = [['a']];
const list2 = ['a'];

const board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
];
const list = ["oath", "pea", "eat", "rain"];

console.log(boggle(board2, list2));

