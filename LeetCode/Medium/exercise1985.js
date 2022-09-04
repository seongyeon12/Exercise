/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function(nums, k) {
  let map = nums.map(x => BigInt(x))
  map.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

  return String(map[k -1]);
};