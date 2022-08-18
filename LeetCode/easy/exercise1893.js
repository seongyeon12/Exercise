var isCovered = function(ranges, left, right) {
  let set = new Set();

  for (let i = 0; i < ranges.length; i++) {
    for (let j = ranges[i][0]; j <= ranges[i][1]; j++) {
      set.add(j);
    }
  }

  for (let i = left; i <= right; i++) {
    console.log(i)
    if (!set.has(i)) {
      return false;
    }
  }
  return true;
}

console.log(isCovered([[25,42],[7,14],[2,32]], 15, 38))

