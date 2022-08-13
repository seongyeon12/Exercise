var kthDistinct = function(arr, k) {
  let newArr = [];
  let length = kthDistinct.length;
  for(let i = 0; i < length; i++) {
    if(newArr.includes(arr[i])) {
      arr.splice(i, 1);
    } else {
      newArr.push(arr.splice(i, 1));
    }
  }

  return newArr;
};

console.log(kthDistinct(["d","b","c","b","c","a"], 2))