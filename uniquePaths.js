// var uniquePaths = function(m, n) {
//   let count = 0;
//   let matrix = [];
//   for (let i = 0; i < m; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < n; j++) {
//       matrix[i][j] = 1;
//     }
//   }
//   const recurse = (i, j) => {
//     if (i === m - 1 && j === n - 1) {
//       count++;
//       console.log(count);
//       return;
//     }
//     if (i < 0 || i >= m || j < 0 || j >= n) {
//       return;
//     }
//     recurse(i + 1, j);
//     recurse(i, j + 1);
//   };
//   recurse(0, 0);
//   return count;
// };

const uniquePaths = (m, n) => {
  let count = 0;
  let matrix = [];
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
}

const m = 20;
const n = 20;
const f = uniquePaths(m, n);
console.log(f);
