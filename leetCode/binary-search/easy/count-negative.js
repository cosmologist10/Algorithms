// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

// Runtime: 328 ms, faster than 5.59% of JavaScript online submissions for Count * * //Negative Numbers in a Sorted Matrix.
//Memory Usage: 49.5 MB, less than 5.96% of JavaScript online submissions for Count //Negative Numbers in a Sorted Matrix.

const predicate = (array, mid) => {
    try{
        return array[mid] < 0
    } catch(ex){
        throw ex;
    }
};


const binarySearch = (array, lastNegativeCount) => {
    try{
        let negatives = 0;
        let f = -1;
        let l = lastNegativeCount ? array.length - lastNegativeCount : array.length;

        while ((l - f) > 1){
            const mid = Math.floor((l + f)/2);

            if (predicate(array, mid)){
                negatives += l - mid;
                l = mid
            } else {
                f = mid
            }
        }
        return  lastNegativeCount ? negatives + lastNegativeCount : negatives ;
    } catch(ex){
        throw ex;
    }
};


const countNegatives = (grid) =>{
    try{
        let lastNegativeCount = 0; let count = 0;
        for (let i = 0; i< grid.length; i+=1){
            console.log('grid[i]', grid[i], lastNegativeCount);
            const eachCount = binarySearch(grid[i], lastNegativeCount);
            lastNegativeCount = eachCount ? eachCount : lastNegativeCount;
            count += eachCount;
        }
        return count
    } catch(ex){
        throw ex;
    }
};

