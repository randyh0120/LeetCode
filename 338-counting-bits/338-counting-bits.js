/**
 * @param {number} n
 * @return {number[]}
 */

// time O(n) | space O(1)
var countBits = function(n) {
    let ans = [0];
    
    for (let i = 1; i < n + 1; i++) {
        ans.push(counting(i));
    }
    
    return ans;
    
    function counting(num) {
        count = 0;
        
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        
        return count;
    }
};