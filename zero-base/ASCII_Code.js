function solution(s) {
  var answer = [];
  for(i = 0; i < s.length; i++) {
      let t = s.charCodeAt(i)
      answer.push(t)
  }
  return answer;
}