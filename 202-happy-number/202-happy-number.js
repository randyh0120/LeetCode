/**
 * @param {number} n
 * @return {boolean}
 */
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