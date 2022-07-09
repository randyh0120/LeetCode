/**
 * @param {number} n
 * @return {string[][]}
 */

// time O(n!) | space O(n^n)
var solveNQueens = function(n) {
    let res = [];
    
    function backtrack(board, row) {
        if (row === n) {
            // - 1 to account for adding a Q that takes up a space
            res.push(board.map((col) => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
        }
        
        for (let col = 0; col < n; col++) {
            // bc is the current element
            // br is the index of the element bc
            //
            // bc === c | checks row and col
            // bc === c - r + br | checks lower diagonal
            // bc === c + r - br | checks upper diagonal
            if (!board.some((bc, br) => bc === col || bc === col - row + br || bc === col + row - br)) {
                backtrack(board.concat(col), row + 1);
            }
        }
    }
    
    backtrack([], 0);
    
    return res;
}