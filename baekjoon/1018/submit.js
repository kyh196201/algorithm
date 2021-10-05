const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const whiteFirstRow = ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'];
const blackFirstRow = ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const [N, M] = input
    .shift()
    .split(' ')
    .map(v => Number(v));

  const plates = input.map(v => v.split(''));

  // 8 * 8 개수의 칸을 모두 바꾸는 경우가 64이므로 최초 시작값을 64로 설정
  let minCount = 64;

  for (let row = 0; row <= N - 8; row += 1) {
    for (let col = 0; col <= M - 8; col += 1) {
      // 검은색 칸부터 시작하는 경우에 바꿔야하는 칸의 개수
      let blackFirstCount = 0;
      // 흰색 칸부터 시작하는 경우에 바꿔야하는 칸의 개수
      let whiteFirstCount = 0;

      // 검은색 칸부터 시작하는 경우
      for (let i = 0; i < 8; i += 1) {
        const currentRow = plates[i + row];
        const comparedRow = i % 2 === 0 ? blackFirstRow : whiteFirstRow;

        for (let j = 0; j < 8; j += 1) {
          if (comparedRow[j] !== currentRow[j + col]) {
            blackFirstCount += 1;
          }
        }
      }

      // 흰색 칸부터 시작하는 경우
      for (let i = 0; i < 8; i += 1) {
        // 실제 입력된 배열에서의 row 인덱스 = i + row
        const currentRow = plates[i + row];
        const comparedRow = i % 2 === 0 ? whiteFirstRow : blackFirstRow;

        for (let j = 0; j < 8; j += 1) {
          // 실제 입력된 배열에서의 col 인덱스 = j + col
          if (comparedRow[j] !== currentRow[j + col]) {
            whiteFirstCount += 1;
          }
        }
      }

      minCount = Math.min(minCount, blackFirstCount, whiteFirstCount);
    }
  }

  console.log(minCount);

  process.exit();
});
