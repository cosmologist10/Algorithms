// https://leetcode.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var findCircleNum = function(M) {
    let res = 0;
    const dsu = new DSU(M.length);
    for(let row = 0; row < M.length; row++) {
        for(let col = 0; col < M[0].length; col++) {
            if(M[row][col] === 1) {
                dsu.union(row, col);
            }
        }
    }
    return new Set(M.map((m, i) => dsu.find(i))).size;
};


class DSU {
    constructor(N) {
        this.parent = [...new Array(N).keys()];
    }
    find(x) {
        if(this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }
    union(x, y) {
        if(this.find(x) === this.find(y)) return false;
        this.parent[this.find(x)] = this.find(y);
        return true;
    }
}
