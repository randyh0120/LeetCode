/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    
    let res = [];
    
    function backtrack(arr, start) {
        res.push(arr);
        
        for (let i = start; i < nums.length; i++) {
            // If we have already seen this then we have already added it
            // This skips it
            // look at the case [1, 2, 2, 2, 3]
            // At one point it will have duplicates so we are allowed to add the original 
            // but not the duplicates
            if (i !== start && nums[i] === nums[i - 1]) continue;
            
            backtrack(arr.concat(nums[i]), i + 1);
        }
    }
    
    backtrack([], 0);
    
    return res;
}