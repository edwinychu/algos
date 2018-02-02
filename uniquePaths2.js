var uniquePathsWithObstacles = function(obstacleGrid) {
    let count = 0;
    const recurse = (i, j) => {
        if (i === obstacleGrid.length - 1 && j === obstacleGrid[0].length - 1 && obstacleGrid[i][j] !== 1) {
          count++;
          return;
        }
        
        if (i < 0 || i > obstacleGrid.length - 1 || j < 0 || j > obstacleGrid[0].length - 1 || obstacleGrid[i][j] === 1) {
            return;
        }
        
        recurse(i+1, j);
        recurse(i, j+1);
    }
    recurse(0,0);
    return count;
};


const maze1 = [[1]];
const maze = [[0, 0, 0], [0, 1, 0], [0, 0, 0], [1,0,0]];
const f = uniquePathsWithObstacles(maze);
console.log(f);