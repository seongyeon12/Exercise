/* 숫자가 주어지고 
그 바로 뒤에 숫자 수를 계산해서 
가장 많은 숫자를 반환해라 
 */

function mostFrequent (nums, key) {
  let arr = [... new Set(nums)];
  let obj = {}; 

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }
	for (let i = 0; i < nums.length - 1; i++) {
    if(nums[i] == key) {
      obj[nums[i+1]] += 1;
    }
  }
  let i = 0,
  result;
  for (let j in obj) {
    if (i < obj[j]) {
      i = obj[j];
      result = j;
    }
  }

  return result;
};

console.log(mostFrequent([3,2,2,3,2,3,4,4], 3))