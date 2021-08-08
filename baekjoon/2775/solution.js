const maxLen = 15;
const apartment = Array.from(new Array(maxLen), () => new Array(maxLen));

for (let i = 0; i < maxLen; i += 1) {
  apartment[0][i] = i;
}

function solution(k, n) {
  if (n === 0) return 0;

  if (apartment[k][n] >= 0) return apartment[k][n];

  apartment[k][n] = solution(k, n - 1) + solution(k - 1, n);
  return apartment[k][n];
}
