/**
 * @param {number} n
 * @return {string}
 */
 var minCostToMoveChips = function(position) {
  let m = 0;

    for (let i = 0; i < position.length; i++) {
      if (position[i] % 2 === 0) {
        m++
      }
    }

    return Math.min(m, position.length - m)
};

console.log(minCostToMoveChips([1,2,3]))