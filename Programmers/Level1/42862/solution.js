function solution(n = 2, lost = [], reserve = []) {
  /* 정렬을하고, 미리 lost, reserve에서 겹치는 학생을 제거해야 풀 수 있다. */
  let newLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
  const newReserve = reserve
    .filter(r => !lost.includes(r))
    .sort((a, b) => a - b);

  newReserve.forEach(r => {
    if (newLost.includes(r - 1)) {
      // 앞 번호에게 줄 경우
      newLost = newLost.filter(l => l !== r - 1);
    } else if (newLost.includes(r + 1)) {
      // 뒷 번호에게 줄 경우
      newLost = newLost.filter(l => l !== r + 1);
    }
  });

  return n - newLost.length;
}

const total = 5;
const lost = [1, 2, 3];
const reserve = [2, 3, 4];

console.log(solution(total, lost, reserve));
