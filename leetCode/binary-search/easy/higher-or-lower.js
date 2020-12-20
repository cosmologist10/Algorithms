// https://leetcode.com/problems/guess-number-higher-or-lower/

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */


const guessNumber = (n) => {
    try{
        let f = -1; let l = n;
        let finalData;

        while ((l-f)>1){
            const mid = Math.floor((f + l)/2);
            const val = guess(mid);
            console.log('l, f, mid, val', l, f, mid, val);

            if (guess(mid) === 0){
                return mid;
            } else if (guess(mid) === 1){
                l = mid
            } else{
                f = mid
            }
        }
    } catch (ex) {
        throw ex;
    }
};
