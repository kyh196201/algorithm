function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }

  return -1;
}

describe('', () => {
  it('test', () => {
    expect(solution([1, 1, 1, 1, 0], 3)).toBe(3);
  });
});
