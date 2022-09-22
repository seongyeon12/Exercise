/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    let harf = Math.ceil(arr.length / 2);

    arr.sort((a, b) => a - b)

    if (arr.length % 2 === 0) {
      return (arr[harf - 1] + arr[harf]) / 2;
    } else {
      return arr[harf - 1]
    }
};

console.log(findMedianSortedArrays([1,3], [2]))