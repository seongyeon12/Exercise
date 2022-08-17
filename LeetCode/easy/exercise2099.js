var maxSubsequence = function(nums, k) {
  let result = [];
  nums.sort((a, b) => b - a);

  for (let i = 0; i < k; i++) {
    result.push(nums[i]);
  }

  return result;
};

console.log(maxSubsequence([-1,-2,3,4], 3))