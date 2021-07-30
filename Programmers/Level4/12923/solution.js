(function () {
  const getMaxDivisor = n => {
    for (let i = 2; i <= Math.sqrt(n); i += 1) {
      if (n % i === 0 && n / i <= 1e7) {
        return n / i;
      }
    }
    return 1;
  };

  function solution(begin, end) {
    const answer = new Array(end - begin + 1).fill(0);
    let i = begin === 1 ? begin + 1 : begin;

    for (i; i <= end; i += 1) {
      answer[i] = getMaxDivisor(i);
    }

    return answer;
  }

  console.log(solution(1, 10));
})();
