(function () {
  const reverseNumber = num =>
    parseInt(num.toString().split('').reverse().join('') * Math.sign(num), 10);

  function solution(num1, num2) {
    return Math.max(0, reverseNumber(num1), reverseNumber(num2));
  }

  console.log(solution(734, 893));
});
