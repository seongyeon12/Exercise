/* 
  승자 선언
  기준점 갱신 
  카운트 선언 

  앞 수가 뒤 수보다 작을 시 카운트 +
  카운트가 k와 같아질 시 반복문 break
  카운트가 전 승자보다 높을 시 승자 갱신
*/

var getWinner = function(arr, k) {
    let winner = arr[0];
    let count = 0;

    while (true) {
    for (let i = 1; i < arr.length; i++) {
      console.log(arr)
      if (winner > arr[i]) {
        count++
        arr.push(arr[i])
      } else {
        winner = arr[i];
        count = 1;
      }

      if (count == k) {
        return winner;
      }
    }
  }
};

console.log(getWinner([1,11,22,33,44,55,66,77,88,99], 1000000000))

