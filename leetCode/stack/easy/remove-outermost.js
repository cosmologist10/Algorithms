// https://leetcode.com/problems/remove-outermost-parentheses/

/**
 * @param {string} S
 * @return {string}
 */

const removeOuterParentheses = (S) => {
    let res = ''; let opened = 0;

    for(let i in S){
        let c = S[i];

        if (c === '(' && opened > 0) res = res.concat(c);
        if (c === ')' && opened > 1) res = res.concat(c);

        c === '(' ? opened += 1: opened -= 1
    }
    return res
};
