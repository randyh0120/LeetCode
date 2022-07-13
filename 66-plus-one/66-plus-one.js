/**
 * @param {number[]} digits
 * @return {number[]}
 */

// time O(n) | space O(1)
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        
        if (digits[i] > 9) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    
    digits.unshift(1);
    
    return digits;
};