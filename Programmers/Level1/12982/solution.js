function solution(d, budget) {
  let count = 0;
  const dLength = d.length;
  // 남은 예산
  let budgetLeft = budget;

  const departments = d.sort((prev, next) => prev - next);

  for (let i = 0; i < dLength; i += 1) {
    const current = departments[i];

    if (budgetLeft < current) break;

    count += 1;
    budgetLeft -= current;
  }

  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9)); // 3
