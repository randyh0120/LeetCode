/**
 * @param {string} s
 * @return {string[][]}
 */

// Time O(N * 2^(N-1)) | Space O(2^(N-1))
var partition = function(s) {
    let res = [];
    
    function isPalindrome(subStr) {
        if (subStr.length === 1) return true;
        
        let left = 0;
        let right = subStr.length - 1;
        
        while (left < right) {
            if (subStr[left] !== subStr[right]) return false;
            left++;
            right--;
        }
        
        return true;
    }
    
    function backtrack(str, arr) {
        if (!str.length) res.push(arr);
        
        for (let i = 0; i < str.length; i++) {
            const subStr = str.slice(0, i + 1); // Make sure we at least have once char
            
            if (isPalindrome(subStr)) {
                backtrack(str.slice(i + 1), arr.concat(subStr));
            }
        }
    }
    
    backtrack(s, []);
    
    return res;
};