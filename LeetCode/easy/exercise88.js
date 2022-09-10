var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n)

  for (let j = 0; j < n; j++) {
    nums1.push(nums2[j])
  }
  nums1.sort((a, b) => a - b)

  return nums1;
};


console.log(merge([1,2,3,0,0,0]
  ,3
  ,[2,5,6]
  ,3))