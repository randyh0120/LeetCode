/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

// time O(m * n) | space O(m * n)
var pacificAtlantic = function(heights) {
    if (!heights.length) return [];
    
    let res = [];
    let pacific = new Array(heights.length).fill().map(r => new Array(heights[0].length).fill(false));
    let atlantic = new Array(heights.length).fill().map(r => new Array(heights[0].length).fill(false));
    
    for (let row = 0; row < heights.length; row++) {
        dfs(row, 0, pacific, heights[row][0]);
        dfs(row, heights[0].length - 1, atlantic, heights[row][heights[0].length - 1]);
    }
    
    for (let col = 0; col < heights[0].length; col++) {
        dfs(0, col, pacific, heights[0][col]);
        dfs(heights.length - 1, col, atlantic, heights[heights.length - 1][col]);
    }
    
    return res;
    
    function dfs(r, c, ocean, prev) {
        if (r < 0 || r >= heights.length || c < 0 || c >= heights[0].length || ocean[r][c] || heights[r][c] < prev) {
            return;
        }
        
        ocean[r][c] = true;
        
        // If water from this point can reach both oceans then add to array
        if (pacific[r][c] && atlantic[r][c]) res.push([r, c]);
        
        dfs(r + 1, c, ocean, heights[r][c]);
        dfs(r - 1, c, ocean, heights[r][c]);
        dfs(r, c - 1, ocean, heights[r][c]);
        dfs(r, c + 1, ocean, heights[r][c]);
    }
};