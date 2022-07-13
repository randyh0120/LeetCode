/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

// time O(1) || space O(1)
var reverseBits = function(n) {
    let res = '';
    let count = 32;
    
    while (count--) {
        res *= 2;
        res += n & 1;
        n >>= 1;
    }
    
    return res;
};