function solution(rank, attendance) {
  const attends = [];

  // 참석하는 학생만 attends에 push
  attendance.forEach((attend, i) => {
    if (attend) attends.push({rank: rank[i], order: i});
  });

  // 등수 오름차순으로 정렬
  attends.sort((a, b) => a.rank - b.rank);

  // 상위 3명의 순서를 추출
  const [a, b, c] = attends.slice(0, 3).map(({order}) => order);

  return 10000 * a + 100 * b + c;
}

describe('전국 대회 선발 고사', () => {
  it('test', () => {
    expect(
      solution(
        [3, 7, 2, 5, 4, 6, 1],
        [false, true, true, true, true, false, false],
      ),
    ).toBe(20403);
  });
});
