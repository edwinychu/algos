var generateParenthesis = function(n) {
  var output = [];

  var printParens = function(right, left, string) {
    //keep generating left parens as long as it's below n
    if (left < n) {
      printParens(right, left + 1, string + "(");
    }
    if (right < left) {
      //generate right parens as long as it's below left
      printParens(right + 1, left, string + ")");
    }
    if (right >= n && left >= n) {
      //else if right parens and left parens = n, push into output
      output.push(string);
    }
  };

  printParens(0, 0, "");
  return output;
};
