// https://leetcode.com/problems/find-the-duplicate-number/

// we can use pigeon hole concept here. We do binary search on the search
// space of [1:N], then count the number of elements <= middle. If the
// duplicate is on the left side, then count should be more than mid,
// else it is on the right side. Initially search space is [1: N], then
// each time narrow down the search space

const predicate = (mid, nums, count)=> {
    try{
        for (let num of nums){
            if (num<=mid){
                count++
            }
        }
        return count > mid
    } catch(ex){
        throw ex;
    }
}
const findDuplicate = function(nums) {
    let f = -1; let l = nums.length;

    while((l - f) > 1){
        let count = 0;
        const mid = Math.floor((f + l)/2);
        if (predicate(mid, nums, count)){
            l = mid
        } else{
            f = mid
        }
    }
    return l
};

