/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let visited = new Set();
    let courses = new Array(numCourses).fill(null).map(c => []);
    
    for (const [c, p] of prerequisites) {
        courses[c].push(p);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    
    return true;
    
    function dfs(c) {
        if (visited.has(c)) return false;
        
        if (!courses[c].length) return true;
        
        visited.add(c);
        
        for (const preq of courses[c]) {
            if (!dfs(preq)) return false;
        }
        
        visited.delete(c);
        courses[c] = [];
        
        return true;
    }
};

// [0, 1] [1, 2] [1, 0]