/**
 * @param {number[][]} accounts
 * @return {number}
 */
  var maximumWealth = function(accounts) {
  let max = 0;
      for (i = 0; i < accounts.length; i++) {
  let sum = accounts[i].reduce((acc, cur) => acc + cur)
  if (sum > max) {
      max = sum
      }
  };
  return max
};
