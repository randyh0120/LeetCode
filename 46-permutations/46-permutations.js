/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    
    function backtrack(arr, options) {
        if (!options.length) res.push(arr);
        
        for (let i = 0; i < options.length; i++) {
            backtrack(arr.concat(options[i]), [...options.slice(0, i), ...options.slice(i + 1)])
        }
    }
    
    backtrack([], nums);
    
    return res;
};

// [1, 2, 3]
//  ^
// [1]
// [2, 3]
//  ^
// [1, 2]
// [3]
//  ^
// [1, 2, 3]

// [2, 3]
//     ^
// [1, 3]
// [2]
//  ^
// [1, 3, 2]

// [1, 2, 3]
//     ^
// [1, 3]
//  ^
// [3]
//  ^
// [2, 1, 3]

// [1, 3]
//     ^
// [1]
//  ^
// [2, 3, 1]