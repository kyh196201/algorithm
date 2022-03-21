function solution(n, m) {
  const answer = [];

  function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  }

  answer[0] = n > m ? gcd(n, m) : gcd(m, n);
  answer[1] = (n * m) / answer[0];

  return answer;
}

console.log(solution(3, 12));
