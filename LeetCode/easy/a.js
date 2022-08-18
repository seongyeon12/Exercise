let abj = {
  name: 'foo',
  description: 'bar'
};

let arr = [1, 2, 3, 4, 5];
let tmp = [];

for (value of arr) {
  tmp.push(value);
}

console.log(tmp);