const numIslands = (grid) => {
  let counter = 0;

  const DFS = (i, j) => {
    if (i < 0 || i > grid.length - 1 || j < 0 || j > grid[0].length - 1 || grid[i][j] != 1) {
      return;
    }
    grid[i][j] = 2;
    DFS(i - 1, j);
    DFS(i + 1, j);
    DFS(i, j + 1);
    DFS(i, j - 1);
  }

  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (grid[i][j] == 1) {
        counter++;
        DFS(i, j);
      }
    }
  }
  return counter;
}

const island = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"]
];
const f = numIslands(island);
console.log(f);
