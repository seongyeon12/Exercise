function a(s) {
  let arr = [...s];
  let i = 0;
  let j = 1;

  while (j < arr.length) {
      if(arr[i] == arr[j]) {
        arr.splice(i, 2);
        i = 0;
        j = 1;
      } else {
        i++
        j++
      }
  }
  return arr.join("");
}

console.log(a("azxxzy"));

/* 
[a, z, x]
x - > 제거 
z -> 제거 
[a y]
*/