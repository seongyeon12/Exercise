var bagOfTokensScore = function(tokens, power) {
  let score = 0;

  // 토큰 요소 정렬
  tokens.sort((a, b) => a - b)

  while (true) {    
    // 토큰 다 계산한 경우
    if (tokens.length === 0) {
      return score;
    }

    // 토큰 0보다 점수가 작음
    if (tokens[0] > power) {
      // 점수 없을 시 또는 크기가 1일 시 그대로 반환 
      if (score === 0 || tokens.length == 1) {
        return score;
      }
      // 마지막 값을 파워에 넣어주고 마지막 요소 제거, 스코어 -1
      power += tokens.pop();
      score--;
    } else {
      power -= tokens.shift(); 
      score++;
    }
  }
};

console.log(bagOfTokensScore([81,91,31], 150))