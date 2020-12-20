// https://leetcode.com/problems/sqrtx/


const predicate = (num, target) => {
    try{
        console.log('predicate :', num, target, target <= num)
        return target <= num
    } catch(ex){
        throw ex;
    }
};

const mySqrt = function(num) {
    let f = -1 ; let l = num+1;
    while ((l - f) > 1){
        const mid = Math.floor((l + f)/2);
        console.log('f, l, mis', f, l, mid);
        if (predicate(num, mid*mid)){
            f = mid;
        } else{
            l = mid
        }
    }
    console.log('f :', f);
    return f;
};


