/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// time O(n) | space O(1)
var getSum = function(a, b) {
    while (b) {
        let temp = (a & b) << 1
        a = a ^ b;
        b = temp;
    }
    
    return a;
};

// 1001 - 9
//+1011 - 11
// ----
// 0010  xor
// 1001  &
//10010  & << 1
//
// 0010 - 1
//10010 - 17
// ----
//10000 - 16
//00100 - 4
//-----
//10100 = 20
//