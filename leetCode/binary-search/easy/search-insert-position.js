// https://leetcode.com/problems/search-insert-position/


const predicate = (mid, array, target) => {
    try{
        return array[mid] >= target
    } catch (ex) {
        throw ex;
    }
};


const searchInsert = (array, target) => {
    try{
        let f = -1; let l = array.length;
        let finalData = null;

        while ((l-f)>1){
            const mid = Math.floor((f + l)/2);
            if(predicate(mid, array, target)){
                l = mid;
                finalData = mid
            } else {
                f = mid
            }
        }
        finalData = finalData !== null ? finalData : array.length;

        return finalData
    } catch (ex) {
        throw ex;
    }
};

