function solution(n, graph) {
  // 인덱스의 0부분 계산 
  let tmp = [];

  for (let i = 0; i < n; i++) {
    tmp.push(0);
  }

  for(let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(graph[i][j] == 0 && i != j) {
        for(let c = 0; c < n; c++) {
          if(graph[c][j] == 1 && graph[c][i] == 1 && i != c) {
            tmp[i] += 1;
            break;
          }
        }
      }
    }
  }

  return tmp;
}

console.log(solution(4, [[0, 0, 1, 0], [0, 0, 1, 1], [1, 1, 0, 1], [0, 1, 1, 0]]))