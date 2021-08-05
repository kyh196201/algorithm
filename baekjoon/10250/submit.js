const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(H, M, N) {
  const floor = N % H;
  const floorAsString = floor === 0 ? `${H}` : `${floor}`;

  const roomNumber = Math.ceil(N / H);
  const roomNumberAsString =
    roomNumber < 10 ? `0${roomNumber}` : `${roomNumber}`;

  return `${floorAsString}${roomNumberAsString}`;
}

const input = [];
let result = '';

rl.on('line', line => {
  input.push(line);
}).on('close', () => {
  const count = +input[0];

  for (let i = 1; i <= count; i += 1) {
    if (i !== 1) {
      result += '\n';
    }

    const numbers = input[i].split(' ').map(n => +n);
    result += solution(...numbers);
  }

  console.log(result);
  process.exit();
});
