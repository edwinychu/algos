var shortestPathInMaze = function(board, start, end) {
  var initial = {
    coord: start,
    dist: 0
  }
  var distances = [];
  var queue = [initial];
  while (queue.length > 0) {
    var current = queue.shift();
    var currentI = current.coord[0];
    var currentJ = current.coord[1];

    board[currentI][currentJ] = 2;//mark as visited

    if (currentI === end[0] && currentJ === end[1]) {
      return current.dist;
    }

    //up
    if (currentI > 0 && board[currentI - 1][currentJ] === 1) {
      var newMove = { coord: [currentI-1, currentJ], dist: current.dist + 1 };
      queue.push(newMove);
    }
    //down
    if (currentI < board.length - 1 && board[currentI + 1][currentJ] === 1) {
      var newMove = { coord: [currentI + 1, currentJ], dist: current.dist + 1 };
      queue.push(newMove);
    }
    //left
    if (currentJ > 0 && board[currentI][currentJ - 1] === 1) {
      var newMove = { coord: [currentI, currentJ -1], dist: current.dist + 1 };
      queue.push(newMove);
    }
    //right
    if (currentI < board[0].length - 1 && board[currentI][currentJ + 1] === 1) {
      var newMove = { coord: [currentI, currentJ + 1], dist: current.dist + 1 };
      queue.push(newMove);
    }
  }
  return "no path found";
}

var maze = [
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
];
var start = [0,0];
var end = [3,4];
console.log(shortestPathInMaze(maze, start, end));


//var shortestPathInMaze = function(maze, start, end) {
//   var start = {
//     coord: start,
//     dist: 0
//   }
//   var queue = [];
//   queue.push(start);
//   while (queue.length > 0) {
//     var current = queue.shift();//remember to take the first thing from the queue!!!
//     var currentI = current.coord[0];
//     var currentJ = current.coord[1];
//     if (currentI === end[0] && currentJ === end[1]) {
//       return current.dist;
//     }
//     maze[currentI][currentJ] = 2;
//     //up
//     if (currentI > 0 && maze[currentI - 1][currentJ] === 1) {
//       var newCoord = { coord: [currentI -1, currentJ], dist: current.dist + 1};
//       queue.push(newCoord);
//     }
//     //down
//     if (currentI < maze.length - 1 && maze[currentI + 1][currentJ] === 1) {
//       var newCoord = { coord: [currentI + 1, currentJ], dist: current.dist + 1 };
//       queue.push(newCoord);
//     }
//     //left 
//     if (currentJ > 0 && maze[currentI][currentJ - 1] === 1) {
//       var newCoord = { coord: [currentI, currentJ - 1], dist: current.dist + 1 };
//       queue.push(newCoord);
//     }
//     //right
//     if (currentJ < maze[0].length - 1 && maze[currentI][currentJ + 1] === 1) {
//       var newCoord = { coord: [currentI, currentJ + 1], dist: current.dist + 1 };
//       queue.push(newCoord);
//     }
//   }
//   return "can't reach the end";
// }

