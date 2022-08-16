function solution(x) {
  function sumDigits(num = 0) {
    let sum = 0;
    let temp = num;

    while (temp) {
      sum += temp % 10;
      temp = Math.floor(temp / 10);
    }

    return sum;
  }

  const sumOfDigits = sumDigits(x);

  return x % sumOfDigits === 0;
}

console.log(solution(10)); // true
console.log(solution(11)); // false
