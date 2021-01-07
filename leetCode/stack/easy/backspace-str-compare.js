// https://leetcode.com/problems/backspace-string-compare/


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function(S, T) {
//     const sRes = [];
//     const tRes = [];

//     for(let i in S){
//         if(S[i] === '#' && sRes.length){
//             sRes.pop();
//         } else{
//             if(S[i] !== '#'){
//                 sRes.push(S[i])
//             }
//         }
//     }

//     for(let i in T){
//         if(T[i] === '#' && tRes.length){
//             tRes.pop();
//         } else{
//             if(T[i] !== '#'){
//                 tRes.push(T[i])
//             }

//         }
//     }

//     return sRes.join("") === tRes.join("")
// };

const process = s => {
    const res = [];
    for (x of s.split('')) {
        x === '#' ? res.pop() : res.push(x);
    }
    return res.join('')
}
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = (S, T) => process(S) == process(T);



