/**
 * @param {string} s
 * @return {number}
 */

// time O(n) | space O(n)
var numDecodings = function(s) {
    if (s === null || !s.length || s[0] === '0') return 0;
    
    let dp = new Array(s.length + 1).fill(0);
    
    dp[0] = 1;
    dp[1] = 1;
    
    // <= make sure to include the =
    for (let i = 2; i <= s.length; i++) {
        const a = Number(s.slice(i - 1, i)); // Last 1 digit
        if (a >= 1 && a <= 9) {
            dp[i] += dp[i - 1];
        }
        
        const b = Number(s.slice(i - 2, i)); // Last 2 digits
        if (b >= 10 && b <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[s.length];
};