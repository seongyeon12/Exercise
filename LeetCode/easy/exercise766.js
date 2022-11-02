/* 
  밑 + 1칸에 같은 수가 존재
  다른 수일 경우 false 
  고로 - 배열의 크기에서 -2를 해 마지막 배열을 제외한 배열을 계산
  또한 배열의 마지막 칸은 계산하지 말것

*/
 var isToeplitzMatrix = function(matrix) {
    for (let i = 0; i < matrix.length - 1; i++) {
      for (let j = 0; j < matrix[i].length - 1; j++) {
        if (matrix[i][j] !== matrix[i + 1][j +1]) {
          console.log(matrix[i][j])
          console.log(matrix[i + 1][j + 1])
          return false
        }
      }
    }
    return true
};

console.log(isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]]))