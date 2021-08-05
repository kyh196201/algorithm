function solution(H, M, N) {
  const floor = N % H;
  const roomNumber = parseInt(N / H, 10) + 1;
  const roomNumberAsString =
    roomNumber < 10 ? `0${roomNumber}` : `${roomNumber}`;

  return `${floor}${roomNumberAsString}`;
}

const H = 30;
const M = 50;
const N = 72;

console.log(solution(H, M, N));
