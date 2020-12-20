// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

const predicate =(mid, array)  => {
    try{
        return array[mid] === 0;
    } catch (ex) {
        throw ex;
    }
};

const countOnes = (array) => {
    try{
        const n = array.length;
        let f = -1; let l = n;
        let counts = 0;
        while ((l-f) > 1){
            const mid = Math.ceil((l+f)/2);
            if (predicate(mid, array)){
                counts += l - mid;
                l = mid;
            } else {
                f = mid;
            }
        }
        return n - counts;
    } catch(ex){
        throw ex;
    }
};

function sortWithIndeces(toSort, k) {
    toSort.sort(function(left, right) {
        return left[0] < right[0] ? -1 : 1;
    });
    toSort.sortIndices = [];
    let j = 0;

    while (j < k){
        toSort.sortIndices.push(toSort[j][1]);
        toSort[j] = toSort[j][0];
        j += 1;
    }

    return toSort['sortIndices'];
}


const kWeakestRows = (mat, k) => {
    try{
        const finalData = [];
        for(let i=0 ; i < mat.length; i +=1){
            finalData.push([countOnes(mat[i]), i]);
        }
        return sortWithIndeces(finalData, k);
    } catch (ex) {
        throw ex;
    }
}
