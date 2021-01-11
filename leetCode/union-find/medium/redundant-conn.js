// https://leetcode.com/problems/redundant-connection/


/**
 * @param {number[][]} edges
 * @return {number[]}
 */

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



var findRedundantConnection = function(edges) {
    let dsu = new DSU(edges.length);

    for(let i=0; i<edges.length; i+=1){
        let u = edges[i][0]; let v = edges[i][1];
        if(!dsu.union(u, v)){
            return edges[i]
        }
    }
};
