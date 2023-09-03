function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();

  // i = 부분 수열의 시작점
  for (let i = 0; i < elements.length; i += 1) {
    let sum = 0;

    // i를 시작점으로 해서 만들 수 있는 모든 부분 수열의 합을 바로 구한다.
    for (let j = 0; j < elements.length; j += 1) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

describe('연속 부분 수열 합의 개수', () => {
  it('test', () => {
    expect(solution([7, 9, 1, 1, 4])).toBe(18);
  });
});
