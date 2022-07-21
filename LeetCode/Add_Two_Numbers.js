let t = [2,4,9];
let u = [5,6,4];
let arr = [];
let excess = 0;

for (let i = 0; i < t.length; i++) {
  let value = t[i] + u[i]; 
  arr.push(value);
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    excess += arr[i];
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 10) {
    arr[i] = 9;
  }
}

if (excess = !0) {
  let nine = excess / 10;
  let last = excess % 10;
  for (i = 0; i < nine.length; i++) {
    arr.push(9);
  }
  arr.push(last);
}

console.log(arr);