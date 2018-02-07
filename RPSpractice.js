const RPS = (rounds) => {
  let results = [];
  let moves = ['r','p','s'];
  const recurse = (built) => {
    if (built.length === rounds) {
      results.push(built);
      return;
    }
    for (let i=0; i<moves.length; i++) {
      recurse(built + moves[i]);
    }
    
  }
  recurse('');
  return results;
}

const f = RPS(2);
console.log(f);