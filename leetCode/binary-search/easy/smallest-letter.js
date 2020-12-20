// https://leetcode.com/problems/find-smallest-letter-greater-than-target/




const predicate = (mid, array, target) => {
    try{
        return array[mid] > target
    } catch (ex) {
        throw ex;
    }
};


const nextGreatestLetter = (array, target) => {
    try{
        let f = -1; let l = array.length;
        let finalData;

        while ((l-f)>1){
            const mid = Math.floor((f + l)/2);
            if(predicate(mid, array, target)){
                l = mid;
                finalData = array[mid]
            } else {
                f = mid
            }
        }
        finalData = finalData ? finalData: array[0];

        return finalData

    } catch (ex) {
        throw ex;
    }
};
