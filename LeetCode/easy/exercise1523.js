function count (low, high) {
  let count = 0;
  if (low%2 !== 0) {
    count++;
    low += 2;
  } else {
    low += 1;
  }

  while (low <= high) {
    count++;
    low += 2;
  }
  let a = result.length;
  return a;
}

console.log(count(3, 7));