/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (!x) return x;
    
    let reversed = 0;
    let sign = x >= 0;
    x = Math.abs(x);
    
    while (x) {
        const pop = x % 10
        x = Math.floor(x / 10);
        reversed = (reversed * 10) + pop;
    }
    
    return reversed > 0x7FFFFFFF ? 0 : sign ? reversed : -reversed;
};

// 123
//
// 123 % 10 => 3
// 123 / 10 => 12    Math.floor()
// 3
// 12
//
// 12 % 10 => 2
// 12 / 10 => 1
// 32
// 1
//
// 1 % 10 => 1
// 1 / 10 => .1
// 321
// 0