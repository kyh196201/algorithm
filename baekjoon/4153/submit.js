const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 세 변을 입력받아서 직각삼각형인지 체크하는 함수
function isRightTriangle(...legs) {
  let maxIndex = 0;

  //   가장 긴 변의 인덱스를 구한다.
  for (let i = 1; i < legs.length; i += 1) {
    if (legs[i] > legs[maxIndex]) {
      maxIndex = i;
    }
  }

  const [maxLeg] = legs.splice(maxIndex, 1);

  //   직각삼각형인지 확인
  const isRight = maxLeg ** 2 === legs[0] ** 2 + legs[1] ** 2;

  return isRight ? 'right' : 'wrong';
}

const input = [];
let result = '';

rl.on('line', line => {
  input.push(line.split(' ').map(Number));
}).on('close', () => {
  let i = 0;
  //   세 변의 길이가 모두 0보다 클 때까지
  while (input[i].every(v => v > 0)) {
    result += `${isRightTriangle(...input[i])}\n`;
    i += 1;
  }

  console.log(result);
  process.exit();
});
