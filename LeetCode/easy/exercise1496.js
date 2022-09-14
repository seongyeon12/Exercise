/* 
N -> 위
W -> 왼쪽 
E -> 오른쪽
S -> 아래쪽

배열 하나 놓음 
움직일 때마다 추가 
배열과 겹칠 경우, true 
끝까지 돌 떄까지 안 겹칠 경우 false
*/

/**
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
  let tmp = [];
  
  /* 좌표들 */
  let x = 0;
  let y = 0;

  for (let i = 0; i < path.length; i++) {
    tmp.push([x, y])

    switch (path[i]) {
      case "N": 
      y++
      break;
      case "W": 
      x--
      break;
      case "E": 
      x++
      break;
      case "S": 
      y--
      break;
    }

    /* x, y좌표중 겹치는 게 있나 임시 배열로 확인 */
    for (let j = 0; j < tmp.length; j++) {
      if (tmp[j][0] == x && tmp[j][1] == y) {
        return true;
      }
    }

  }

    return false;
};