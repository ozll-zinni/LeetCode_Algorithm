/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    const freqArray = Array.from(freqMap.entries()).sort((a,b)=> a[1]-b[1]);

    let uniqueCount = freqArray.length;

    for (let [num,freq] of freqArray) {
        if(k >= freq) {
            k -= freq;
            uniqueCount--;
        } else {
            break;
        }
    }

    return uniqueCount;
};