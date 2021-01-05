// https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    try{
        const row = matrix.length;
        const col = matrix[0].length;
        let max_sum = -Infinity;

        for(let left=0; left<row; left+=1){
            let tmp = Array(col).fill(0);

            for(let right=left; right<row ;right+=1){

                let sum = 0; let max = -Infinity;

                for(let c = 0; c < col; c++) {

                    // build running dp array
                    tmp[c] += matrix[right][c];

                    // implement kadane's algorithm
                    if(sum < 0) sum = 0;
                    sum += tmp[c];
                    max = Math.max(max, sum);
                }

                if(max <= k){
                    max_sum = Math.max(max, max_sum);
                }else{
                    // if max > k find the max subarray sum no larger than k
                    max = -Infinity;
                    for(let c = 0; c < col; c++) {
                        sum = 0;

                        for(let d = c; d < col; d++) {
                            sum += tmp[d];
                            if(sum <= k) max = Math.max(sum, max);
                        }
                    }
                    max_sum = Math.max(max, max_sum);
                }
                if(max_sum === k) return k; // short circuit
            }
        }
        return max_sum;
    } catch(ex){
        console.log('ex:', ex)
    }
};


