/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let result = [];
  let t = candies.slice()
  
  t = t.sort((a, b) => b - a);

  candies.map((v) => {
    if (v + extraCandies >= t[0]) {
      result.push(true);
    } else {
      result.push(false);
    }
  })

  return result;
};