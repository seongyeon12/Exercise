var getWinner = function(arr, k) {
  let winner = arr[0];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (winner < arr[i]) {
      winner = arr[i];
      count = 1;
    } else {
      count++
    }

    if (count === k) {
      return winner;
    }
  }
  
  return winner;
};

console.log(getWinner([1,11,22,33,44,55,66,77,88,99], 1000000000))