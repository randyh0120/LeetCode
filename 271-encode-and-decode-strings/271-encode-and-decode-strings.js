/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res = "";
    
    for (const str of strs) {
        res += str.length + '#' + str;
    }
    
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let res = [];
    let i = 0;
    
    while (i < s.length) {
        let j = i;
        
        while (s[j] !== '#') {
            j++;
        }
        
        const len = parseInt(s.substring(i, j)) + j + 1;
        res.push(s.substring(j + 1, len));
        i = len;
    }
    
    return res;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */