/**
 * @param {number[][]} grid
 * @return {number}
 */

// time O(m * n) | space O(m * n)
var orangesRotting = function(grid) {
    if (!grid.length) return -1;
    
    let minutes = 0;
    let lenR = grid.length;
    let lenC = grid[0].length;
    let queue = [];
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let fresh = 0;
    
    for (let i = 0; i < lenR; i++) {
        for (let j = 0; j < lenC; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh += 1;
        }
    }
    
    while (fresh && queue.length) {
        let next = [];
        
        for (const [row, col] of queue) {
            for (const [rd, cd] of dir) {
                const r = row + rd;
                const c = col + cd;
                
                if (r < 0 || r >= lenR || c < 0 || c >= lenC || grid[r][c] === 0 || grid[r][c] === 2) {
                    continue;
                }
                
                fresh -= 1;
                grid[r][c] = 2;
                next.push([r, c]);
            }
        }
        
        minutes += 1;
        queue = next;
    }
    
    return fresh > 0 ? -1 : minutes;
};