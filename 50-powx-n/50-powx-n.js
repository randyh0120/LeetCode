/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// time O(log n) | space O(log n)
var myPow = function(x, n) {
    if (!n) return 1;
    
    let pow = Math.abs(n);
    
    let res = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
    
    return n > 0 ? res : 1 / res;
};

// 2 ^ 10
// 2^5 * 2^5
// 2^2 * 2^2 * 2
// 
// |||2 * 2| * |2 * 2|| * 2| * |||2 * 2| * |2 * 2|| * 2|
// 2^5 * 2^5
// 
