// https://leetcode.com/problems/valid-perfect-square/


const predicate = (num, target) => {
    try{
        return target >= num
    } catch(ex){
        throw ex;
    }
};

const isPerfectSquare = function(num) {
    let f = -1 ; let l = num+1;
    let finalData = false;
    while ((l - f) > 1){
        const mid = Math.floor((l + f)/2);
        console.log('f, l, mis', f, l, mid);
        if (predicate(num, mid*mid)){
            l = mid;
            if ( mid*mid === num){
                finalData =  true
            }
        } else{
            f = mid
        }
    }
    console.log('finalData :', finalData);
    return finalData;
};
