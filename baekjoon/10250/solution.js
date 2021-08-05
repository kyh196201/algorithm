function solution(H, M, N) {
  const floor = N % H;
  const floorAsString = floor === 0 ? `${H}` : `${floor}`;

  const roomNumber = Math.ceil(N / H);
  const roomNumberAsString =
    roomNumber < 10 ? `0${roomNumber}` : `${roomNumber}`;

  return `${floorAsString}${roomNumberAsString}`;
}

// const H = 30;
// const M = 50;
// const N = 72;
const H = 6;
const M = 12;
const N = 10;

console.log(solution(H, M, N));
