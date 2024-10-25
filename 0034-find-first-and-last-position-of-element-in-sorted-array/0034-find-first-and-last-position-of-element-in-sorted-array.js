/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findstart = () => {
        let left = 0, right = nums.length -1;
        while(left <= right) {
            const mid = Math.floor((left+right)/2);
            if (nums[mid] === target) {
                if(mid === 0 || nums[mid - 1] !== target) {
                    return mid;
                }
                right = mid - 1;
            } else if (nums[mid]<target) {
                left = mid + 1;
            } else{
                right = mid - 1;
            }
        }
        return -1;
    };
    
    const findEnd = () => {
        let left = 0, right = nums.length -1;
        while(left <= right) {
            const mid = Math.floor((left+right)/2);
            if(nums[mid] === target) {
                if(mid === nums.length -1 || nums[mid+1] !== target) {
                    return mid;
                }
                left = mid + 1;
            }else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    };

    const start = findstart();
    if (start === -1) return [-1, -1];
    const end = findEnd();

    return [start, end]
};