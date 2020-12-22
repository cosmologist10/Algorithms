// https://leetcode.com/problems/time-based-key-value-store/

/**
 * Initialize your data structure here.
 */
var TimeMap = function() {
    this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    try{
        if (!this.map.has(key)) this.map.set(key, []);
        this.map.get(key).push({ timestamp, value });
    } catch(ex){
        throw ex;
    }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    try{
        if (!this.map.has(key)) return "";
        return this.binarySearch(this.map.get(key), timestamp);
    } catch(ex){
        throw ex;
    }
};

TimeMap.prototype.binarySearch = function(arr, targetTimestamp) {
    try{
        let f = -1;
        let l = arr.length;

        while ((l - f) > 1) {
            const mid = Math.floor((f + l) / 2);

            if (this.predicate(arr, mid, targetTimestamp)){
                l = mid
            } else{
                f = mid
            }
        }
        return arr[f] && arr[f].value ? arr[f].value : "";
    } catch(ex){
        throw ex;
    }
};

TimeMap.prototype.predicate = function(arr, mid, timeStamp) {
    try{
        return arr[mid].timestamp > timeStamp
    } catch(ex){
        throw ex;
    }
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
