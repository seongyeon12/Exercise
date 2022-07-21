function solution(s) {
  var answer = '';
  for(let v of s) {
      if(v === v.toUpperCase()){
          answer += v.toLowerCase();
      } else answer += v.toUpperCase();
  }
  return answer;
}