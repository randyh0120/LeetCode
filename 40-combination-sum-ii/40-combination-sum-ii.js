/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort();
    
    let res = [];
    
    function backtrack(arr = [], sum = 0, start = 0) {
        if (sum > target) return;
        
        if (sum === target) res.push(arr);
        
        for (let i = start; i < candidates.length; i++) {
            if (i !== start & candidates[i] === candidates[i - 1]) continue;
            
            backtrack(arr.concat(candidates[i]), sum + candidates[i], i + 1);
        }
    }
    
    backtrack();
    
    return res;
};