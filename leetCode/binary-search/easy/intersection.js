// https://leetcode.com/problems/intersection-of-two-arrays/

const predicate = (mid, array, num) => {
    try{
        return array[mid] >= num;
    } catch (ex) {
        throw ex;
    }
};


const binarySearch = (num ,array) => {
    try{
        let matchedNum = null;
        let f = -1; let l = array.length;
        while ((l-f) > 1){
            const mid = Math.ceil((l+f)/2);
            if (predicate(mid, array, num)){
                if (array[mid] === num){
                    matchedNum = num
                }
                l = mid;
            } else {
                f = mid;
            }
        }
        return matchedNum;
    } catch(ex){
        throw ex;
    }
};
