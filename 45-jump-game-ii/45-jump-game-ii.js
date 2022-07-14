/**
 * @param {number[]} nums
 * @return {number}
 */

// time O(n) | space O(1)
var jump = function(nums) {
    let res = 0;
    let curr = -1;
    let next = 0;
    let target = nums.length - 1
    
    for (let i = 0; i < nums.length; i++) {
        // we do this at the beginning in case of input being [0]
        if (next >= target) break;
        
        if (i > curr) res++, curr = next;
        
        next = Math.max(next, nums[i] + i);
    }
    
    return res;
};