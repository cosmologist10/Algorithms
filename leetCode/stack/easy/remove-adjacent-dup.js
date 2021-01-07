
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
    const res = [];

    for(let i in S){
        res && res.length && res[res.length-1] === S[i] ?
            res.pop() : res.push(S[i]);
    }
    return res.join("");
};
