/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// time O(m * n) | space O(m + n)
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0';
    
    let m = num1.length;
    let n = num2.length;
    let res = new Array(m + n).fill(0);
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const first = i + j;
            const sec = i + j + 1;
            
            // res[sec] act as a carry here
            const sum = res[sec] + num1[i] * num2[j];
            
            res[sec] = sum % 10;
            res[first] += Math.floor(sum / 10);
        }
    }
    
    if (res[0] === 0) res.shift();
    
    return res.join('');
};

//    33 => [3, 3]
//   x 4 =>    [4]
//   ---
//    12
//   12  
//   123