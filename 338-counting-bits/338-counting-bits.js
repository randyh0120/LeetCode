/**
 * @param {number} n
 * @return {number[]}
 */

// time O(n) | space O(1)
var countBits = function(n) {
    let ans = [0];
    
    for (let i = 1; i < n + 1; i++) {
        const ones = Number(i).toString(2).replace(/0/g, '').length;
        ans.push(ones);
    }
    
    return ans;
};