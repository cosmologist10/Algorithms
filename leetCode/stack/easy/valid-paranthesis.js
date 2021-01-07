// https://leetcode.com/problems/valid-parentheses/


/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    const stack = [];
    const mapping = {")": "(", "}": "{", "]": "["};
    for(let i in s){
        let char = s[i];
        if(mapping[char]){
            let top_ele = stack && stack.length ? stack.pop() : '#';
            if(mapping[char] !== top_ele){
                return false
            }
        } else{
            stack.push(char)
        }
    }
    return !(stack && stack.length)
};
