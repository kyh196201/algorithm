/*
    1. index = 0, 최초에 벽을 칠한 횟수는 1
    2. selection[index]번 부터 시작
    3. 시작 점은 selection[index]이되고, 끝 점은 selection[index] + m - 1
    4. 끝 점보다 큰 값이 있을 때까지 index를 계속 증가한다.
    5. 끝 점보다 큰 값이 나타나면 count를 + 1
    6. 더 칠할 벽이 남아있을 때 까지 반복한다.
*/
function solution(n = 1, m = 1, selection = []) {
  let index = 0;
  let count = 0;

  while (selection[index]) {
    count += 1;
    const end = selection[index] + m - 1;

    while (selection[index] <= end) {
      index += 1;
    }
  }

  return count;
}

describe('덧칠하기', () => {
  it('test', () => {
    expect(solution(8, 4, [2, 3, 6])).toBe(2);
    expect(solution(5, 4, [1, 3])).toBe(1);
    expect(solution(4, 1, [1, 2, 3, 4])).toBe(4);
  });
});
