const fs = require('fs');

const N = Number(fs.readFileSync('/dev/stdin').toString());

let result = 0;

if (N <= 1) {
  console.log(0);
} else {
  for (let i = N - 1; i >= 1; i -= 1) {
    const decomposition = getDecomposition(i);

    // i의 분해합이 N과 같을 경우 i는 N의 생성자
    if (N === decomposition) {
      // 구한 생성자가 아직 없거나 현재 구한 생성자가 더 작을 경우 값 셋팅
      if (result > i || !result) {
        result = i;
      }
    }
  }

  console.log(result);
}

// 자연수 num의 분해합을 구하는 함수
function getDecomposition(num = 1) {
  let copiedNum = num;
  let sum = num;

  while (copiedNum > 0) {
    sum += copiedNum % 10;
    copiedNum = Math.floor(copiedNum / 10);
  }

  return sum;
}
