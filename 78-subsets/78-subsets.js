/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let list = [];
    
    function backtrack(nums, tempList, start) {
        list.push(tempList);
        
        for (let i = start; i < nums.length; i++) {
            backtrack(nums, tempList.concat(nums[i]), i + 1);
        }
    }
    
    backtrack(nums, [], 0);
    
    return list;
};

