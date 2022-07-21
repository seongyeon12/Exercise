function solution(arr) {
  var answer = true;
  const result = arr.reduce((acc, cur) => {
if(acc[cur]) {
    acc[cur]++;
} else {
    acc[cur] = 1;
}
return acc;
}, {});

let t = Object.values(result);

const set = new Set(t);
console.log(set.size)

if(t.length !== set.size) {
return false;

} else {
return true;
}
  return answer;
}