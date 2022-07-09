/**
 * @param {number[][]} grid
 * @return {number}
 */

// time O(m * n) | space O(m * n)
var maxAreaOfIsland = function(grid) {
    if (!grid || !grid.length) return 0;
    
    let maxArea = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j]) {
                const curArea = dfs(i, j, 0);
                maxArea = Math.max(maxArea, curArea);
            }
        }
    }
    
    function dfs(r, c) {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || !grid[r][c]) {
            return 0;
        } 
        
        let sum = 1;
        
        grid[r][c] = 0;
        
        sum += dfs(r - 1, c);
        sum += dfs(r + 1, c);
        sum += dfs(r, c - 1);
        sum += dfs(r, c + 1);
        
        return sum;
    }
    
    return maxArea;
};