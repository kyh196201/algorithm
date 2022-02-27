function solution(n) {
  let answer = 0;
  function compare(a, b) {
    return parseInt(b, 10) - parseInt(a, 10);
  }

  answer = n.toString(10).split('').sort(compare);

  const len = answer.length;

  return answer.reduce((acc, cur, index) => {
    const exponent = 10 ** (len - index - 1);

    return acc + cur * exponent;
  }, 0);
}

console.log(solution(118372)); // 873211
