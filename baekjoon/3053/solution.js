function solution(r) {
  //   유클리드 원 넓이
  const euclid = Math.PI * r ** 2;

  const taxi = (2 * r) ** 2 / 2;

  console.log(`${euclid.toFixed(6)}\n${taxi.toFixed(6)}`);
}

solution(42);
