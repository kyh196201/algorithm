function solution(a, b, v) {
  // 하루 동안 갈 수 있는 거리
  const heightPerDay = a - b;

  // 전날까지 도달해야할 최소 높이
  const destination = v - a;

  const result = Math.ceil(destination / heightPerDay);

  return result + 1;
}

console.log(solution(100, 99, 1000000000));
