/* 
  첫번째 값 배열에 넣고
  자신보다 크거나 같은 블록에서 큐를 멈출 것
  없을 경우 계속 넣는다 

  크거나 같은 블록을 만날 경우 기준을 새 블록으로 바꾸고 뒤에 있던 블록은 기준점만큼 빼내어 리슈트에 더한다

  큐에 블록이 남을 경우 마지막부터 기준점을 돌려 반대로 돌린다
*/

var trap = function(height) {
    let arr = [];
    let result = 0;
    let index = 0;

  /* 1번 */
  for (let i = 0; i < height.length; i++) {
    if (height[i] >= 1) {
      arr.push(height[i])
      break;
    }
    else {
      index++
    }
  }

  /* 2번 */
  let basis;
  for (let i = index + 1; i < height.length; i++) {
    if (arr[0] <= height[i]) {
      basis = arr[0];
      /* 배열에 있는 요소 계산 */
      for (let j = arr.length - 1; j >= 0; j--) {
        result += basis - arr[j];
      }
      /* 배열 초기화 후 기준점 변경 */
      arr = [];
    }

    arr.push(height[i]);
  }

  /* arr 없을시 바로 출력 */
  if (arr.length <= 0) {
    return result;
  }

  /* 3번 (reverse) - 남은 수가 있을 경우*/
  let basis2 = arr[arr.length - 1];
  let index2 = arr.length - 1;
  /* 마지막 배열부터 반대로 계산 */
  for (let i = arr.length - 2; i >= 0; i--) {
    if (basis2 <= arr[i]) {
      for (let j = index2; j > i; j--) {
        result += basis2 - arr[j];
        index2--;
      }
      
      basis2 = arr[index2];
    }
  }

  return result;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))