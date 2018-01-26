var rockPaperScissors = function(rounds) {
  var output = [];
  var moves = ['r', 'p', 's'];
  var recurse = function(roundsLeft, string) {
    if (roundsLeft === 0) {
      output.push(string);
      return;
    }
    for (var i=0; i<moves.length; i++) {
      recurse(roundsLeft - 1, string + moves[i]);
    }
  }
  recurse(rounds, '');
  return output;
} 

console.log(rockPaperScissors(3));