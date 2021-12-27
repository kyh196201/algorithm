function solution(numbers) {
  const sumOfNumbers = numbers.reduce((sum, num) => sum + num, 0);
  return 45 - sumOfNumbers;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

// result = 14
console.log(solution(numbers));
