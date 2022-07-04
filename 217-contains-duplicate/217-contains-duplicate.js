/**
 * @param {number[]} nums
 * @return {boolean}
 */

// time O(n) | space O(n)
// Where n is the length of the input array (nums)
var containsDuplicate = function(nums) {
    let seen = {};
    
    for (const num of nums) {
        if (seen[num]) return true;
        
        seen[num] = true;
    }
    
    return false;
};