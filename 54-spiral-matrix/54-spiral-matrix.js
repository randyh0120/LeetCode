/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// time O(n) | space O(n)
// We only visit and store everything once
var spiralOrder = function(matrix) {
    let r = matrix.length;
    let c = matrix[0].length;
    let top = 0;
    let bottom = r - 1;
    let left = 0;
    let right = c - 1;
    let arr = [];
    
    while (left <= right && top <= bottom) {
        // top
        for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
        top += 1;
        
        // right
        for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
        right -= 1;
        
        // bottom (check since we updated top)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
            bottom -= 1;
        }
        
        // left (check since we updated right))
        if (left <= right) {
            for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
            left += 1;
        }
    }
    
    return arr;
};