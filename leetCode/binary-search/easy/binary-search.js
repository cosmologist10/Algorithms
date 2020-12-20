// https://leetcode.com/problems/binary-search/

const predicate = (mid, array, num) => {
    try{
        return array[mid] >= num;
    } catch (ex) {
        throw ex;
    }
};


const search = (nums, target) => {
    try{
        let matchedIndex = -1;
        let f = -1; let l = nums.length;
        while ((l-f) > 1){
            const mid = Math.ceil((l+f)/2);
            if (predicate(mid, nums, target)){
                if (nums[mid] === target){
                    matchedIndex = mid
                }
                l = mid;
            } else {
                f = mid;
            }
        }
        return matchedIndex;
    } catch(ex){
        throw ex;
    }
};
