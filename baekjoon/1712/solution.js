(function () {
  const isInteger = num => num === parseInt(num, 10);

  function solution(a, b, c) {
    let result = -1;

    const x = a / (c - b);

    if (x <= 0) {
      return -1;
    }

    if (isInteger(x)) {
      result = x + 1;
    } else {
      result = parseInt(x, 10);
    }

    return result;
  }

  const A = 3;
  const B = 2;
  const C = 1;

  console.log(solution(A, B, C));
})();
