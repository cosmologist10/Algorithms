// https://leetcode.com/problems/koko-eating-bananas/


const predicate = (array, mid, h) => {
    try{
        let count = 0;
        for(let i=0; i < array.length; i+=1){
            count += Math.ceil(array[i]/mid);
        }
        return count <= h;
    } catch(ex){
        throw ex;
    }
};



const minEatingSpeed = (piles, H) => {
    try {
        let f = 0;
        let l = Math.max(...piles) + 1;
        while ((l - f) > 1) {
            const mid = Math.floor((l + f) / 2);
            if (predicate(piles, mid, H)) {
                l = mid
            } else {
                f = mid
            }
        }
        return l
    } catch (ex) {
        throw ex;
    }
};
