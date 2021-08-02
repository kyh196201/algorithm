(function () {
  function solution(a, b, c) {
    if (c - b <= 0) return -1;

    const x = a / (c - b);

    return Math.floor(x) + 1;
  }

  const A = 3;
  const B = 2;
  const C = 1;

  console.log(solution(A, B, C));
})();
