// https://leetcode.com/problems/peak-index-in-a-mountain-array/



const predicate = (mid, array) => {
    try{
        return array[mid] > array[mid-1]
    } catch(ex){
        throw ex;
    }
}

const peakIndexInMountainArray = (arr)  => {
    try{
        let f= -1; let l = arr.length;

        while ((l-f) > 1){
            const mid = Math.ceil((l + f)/2);

            if (predicate(mid, arr)){
                f = mid
            } else{
                l = mid
            }
        }
        return f;

    } catch(ex){
        throw ex;
    }
};
