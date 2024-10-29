/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    ans = 0;
    maxDiff = 0;
    maxNum = 0;

    for(let num of nums){
        ans = Math.max(ans, maxDiff * num);
        maxDiff = Math.max(maxDiff, maxNum - num);
        maxNum = Math.max(maxNum, num);
    }
    return ans
};