/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

// time O(m * n) | sppace O(m * n)
var wallsAndGates = function(rooms) {
    let inf = 2147483647;
    let wall = -1;
    let gate = 0;
    let r = rooms.length;
    let c = rooms[0].length;
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (rooms[i][j] === gate) {
                dfs(i, j, 0);
            }
        }
    }
    
    return rooms;
    
    function dfs(row, col, step) {
        if (row < 0 || row >= r || col < 0 || col >= c || rooms[row][col] === wall 
            || (step && rooms[row][col] <= step)) {
            return 0;
        }
        
        rooms[row][col] = step;
        
        dfs(row - 1, col, step + 1);
        dfs(row + 1, col, step + 1);
        dfs(row, col - 1, step + 1);
        dfs(row, col + 1, step + 1);
    }
};

// Rules:
// Traverse after finding a Gate
// Instead of trying to find the gate lets start at the gate and find the starting point
// This way it will be easier to know how many steps "away" you are from the gate
// Think of it as walking away from the gate instead of to it
// If we walk to it then we know it take 4 steps at the gate
// But if we walk away from it, we know that it takes 4 steps from the starting point to reach the gate