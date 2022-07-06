/**
 * @param {number} n
 * @return {boolean}
 */

// time (n * s) space O(n)
// Not positive on the n part of the time and space
var isHappy = function(n) {
    let res = 0;
    let set = new Set();
    
    while (!set.has(n)) {
        if (n === 1) return true;
        
        set.add(n);
        
        while (n) {
            res += (n % 10) ** 2;
            n = parseInt(n / 10);
        }
        
        n = res;
        res = 0;
    }
    
    return false;
};