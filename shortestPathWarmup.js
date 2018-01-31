const shortestPathWarmUp = (maze, start, end) => {
  let queue = [];
  let move = {
    position: start,
    dist: 0
  }
  queue.push(move);
  while (queue.length > 0) {
    let current = queue.shift();
    let currentI = current.position[0];
    let currentJ = current.position[1];
    if (currentI === end[0] && currentJ === end[1]) {
      return current.dist;
    }
    maze[currentI][currentJ] = 2;
    if ( currentI > 0 && maze[currentI - 1][currentJ] === 1) {
      let newMove = {
        position: [currentI-1,currentJ],
        dist: current.dist + 1
      }
      queue.push(newMove);
    }
    if (currentI < maze.length - 1 && maze[currentI + 1][currentJ] === 1) {
      let newMove = {
        position: [currentI+1,currentJ],
        dist: current.dist + 1
      }
      queue.push(newMove);
    }
    if (currentJ > 0 && maze[currentI][currentJ - 1] === 1) {
      let newMove = {
        position: [currentI,currentJ-1],
        dist: current.dist + 1
      }
      queue.push(newMove);
    }
    if (currentJ < maze[0].length - 1 && maze[currentI][currentJ + 1] === 1) {
      let newMove = { 
        position: [currentI, currentJ + 1], 
        dist: current.dist + 1 };
      queue.push(newMove);
    }
  }
  return -1;
}

var maze = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];

var start = [0, 0];
var end = [3, 4];
console.log(shortestPathWarmUp(maze, start, end))