/* 
배열에 짝수끼리 더하세요, 쿼리의 [0]은 더할 값을, [1]은 인덱스를 나타냅니다.

짝수끼리 더한 값만큼 새배열을 만드면 됩니다. (짝수엔 음수를 포함하며 배열은 변경된 그대로 유지하는 대신에 결과 배열은 따로 존재해야 함)
*/
/* 
  queries의 2번째 자리를 인덱스로 받아서 1번째값을 더하고, 짝수만 더해서 결과배열에 푸쉬한다.
  배열은 그대로 유지하고 반복한다. 
*/
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
  var sumEvenAfterQueries = function(nums, queries) {
  let result = [];
  let num;

  for (let i = 0; i < queries.length; i++) {
    nums[queries[i][1]] += queries[i][0]; 
    num = nums.reduce((prev, arr) => arr % 2 == 0 ? prev + arr : prev + 0, 0)
    result.push(num)
  }
  return result;
};
console.log(sumEvenAfterQueries([1,2,3,4], [[1,0],[-3,1],[-4,0],[2,3]]))