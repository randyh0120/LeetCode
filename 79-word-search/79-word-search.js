/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ROWLEN = board.length;
    let COLLEN = board[0].length;
    
    function backtrack(row, col, wordLength) {
        if (wordLength === word.length) return true;
        
        if (row < 0 
            || row >= ROWLEN 
            || col < 0 
            || col >= COLLEN 
            || board[row][col] !== word[wordLength]) {
            return false;
        }
        
        // let temp = board[row][col];
        
        board[row][col] = '#';
        
        if (backtrack(row - 1, col, wordLength + 1)
           || backtrack(row + 1, col, wordLength + 1)
           || backtrack(row, col - 1, wordLength + 1)
           || backtrack(row, col + 1, wordLength + 1)) {
            return true;
        }
        
        board[row][col] = word[wordLength];
    }
    
    for (let i = 0; i < ROWLEN; i++) {
        for (let j = 0; j < COLLEN; j++) {
            if (backtrack(i, j, 0)) return true;
        }
    }
    
    return false;
};