// 소수인지 판별하는 함수
function isPrime(num) {
  if (num <= 1) return false;

  const squareRoot = Math.floor(Math.sqrt(num));

  for (let i = 2; i <= squareRoot; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(numbers) {
  let count = 0;

  numbers.forEach(num => {
    if (isPrime(num)) {
      count++;
    }
  });

  console.log(count);
}

const numbers = [1, 3, 5, 7];

solution(numbers);
