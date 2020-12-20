// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let f = -1 ; let l = n+1;
        while ((l - f) > 1){
            const mid = Math.floor((l + f)/2);
            if (isBadVersion(mid)){
                l = mid;
            } else{
                f = mid
            }
        }
        return l;
    };
};

