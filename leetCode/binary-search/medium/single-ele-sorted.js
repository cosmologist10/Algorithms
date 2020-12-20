// https://leetcode.com/problems/single-element-in-a-sorted-array/

const predicate = (array, mid) => {
    try{
        if(array[mid] === array[mid -1]){
            // odd case
            return (mid % 2 === 1)
        } else{
            //even case
            return (mid % 2 === 0)
        }
    } catch(ex){
        throw ex;
    }
};


const singleNonDuplicate = function(nums) {
    try{
        const n = nums.length;
        let f = -1;
        let l = n;

        while((l - f) >1){
            const mid = Math.ceil((f + l)/2);
            if (predicate(nums, mid)){
                f = mid
            } else{
                l = mid
            }
        }
        return (nums[f])
    } catch(ex){
        throw ex;
    }
};
