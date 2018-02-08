/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    
    //search through each column per row as long as target is lower or equal to index
    let colIterator = matrix[0].length - 1;
    for (let i=0; i<matrix.length; i++) {
        while (colIterator >= 0 && matrix[i][colIterator] >= target) {
            if (matrix[i][colIterator] === target) {
                return true;
            }
            colIterator--;
        }
        colIterator = matrix[0].length - 1;
    }
    return false;
};