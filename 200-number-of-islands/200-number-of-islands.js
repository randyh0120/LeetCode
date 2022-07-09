/**
 * @param {character[][]} grid
 * @return {number}
 */

// time O(m * n) | space O(m * n)
var numIslands = function(grid) {
    let islands = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // only want to traverse if we are at an island
            if (grid[i][j] === '1') {
                islands += 1;
                dfs(i, j);
            }
        }
    }
    
    function dfs(r, c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === '0') {
            return;
        }
        
        grid[r][c] = '0';
        
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    
    return islands;
};