/**
 * @param {number[]} nums
 * @return {boolean}
 */

// time O(n) | space O(1)
var canJump = function(nums) {
    let idx = 0;
    let max = 0;
    let target = nums.length - 1;
    
    while (idx < nums.length) {
        // We add idx to nums[idx] since we have to at least take 1 step per iteration
        // If you jumpp 0 steps then you will get false
        max = Math.max(max, idx + nums[idx]);
        
        if (max >= target) return true;
        
        // If we can't move past the current idx and the current element is 0 we are stuck
        if (max <= idx && nums[idx] === 0) return false;
        
        idx += 1;
    }
    
    return true;
};