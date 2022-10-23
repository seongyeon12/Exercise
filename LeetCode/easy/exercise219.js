/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
  let obj = {}
  let t = false

    for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] === undefined ? obj[nums[i]] = i : i - obj[nums[i]] <= k ? t = true : obj[nums[i]] = i
      if (t) {
        return true
      }
    }

    return false
};

console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))