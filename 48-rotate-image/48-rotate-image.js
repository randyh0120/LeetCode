/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // Flip Vertically
    for (let i = 0; i < Math.floor(matrix.length / 2); i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[matrix.length - i - 1][j]] = [matrix[matrix.length - i - 1][j], matrix[i][j]];
        }
    }
    
    // Flip Diagonally
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[0].length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    return matrix;
};