/**
 * 0. 이동 과정을 저장할 moves = '' 변수와 이동 횟수를 저장할 변수 count = 0을 전역 변수로 선언한다.
 * 1. 함수 hanoi는 옮길 원판의 개수 n과 시작 원판 start, 옮겨질 원판 end를 인자로 받는다.
 * 2. n이 1일 경우에는 count를 1 늘리고, moves에 `${start} ${end}\n`를 저장한다.
 * 3. n이 1보다 클 경우에는
 * 3개의 원판중에 start, end를 제외한 다른 원판(mid)을 6 - start - end를 통해 구하고,
 * hanoi(n - 1, start, mid)
 * hanoi(1, start, end)
 * hanoi(n - 1, mid, end)
 * 함수를 차례로 실행한다.
 */

let moves = '';
let count = 0;

function hanoi(n = 1, start = 1, end = 3) {
  if (n === 1) {
    moves += `${start} ${end}\n`;
    count += 1;
  } else {
    const mid = 6 - start - end;
    hanoi(n - 1, start, mid);
    hanoi(1, start, end);
    hanoi(n - 1, mid, end);
  }
}

hanoi(3);

console.log(`${count}\n${moves}`);
