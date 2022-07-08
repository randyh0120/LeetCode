/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    
    function backtrack(tempList = [], sum = 0, start = 0) {
        if (sum > target) return;
        
        if (sum === target) res.push(tempList);
        
        for (let i = start; i < candidates.length; i++) {
            const cur = candidates[i];
            
            // We pass in i and not i + 1, becuase we are OK with having duplicate values
            // per successful result
            backtrack(tempList.concat(cur), sum + cur, i);
        }
    }
    
    backtrack();
    
    return res;
};