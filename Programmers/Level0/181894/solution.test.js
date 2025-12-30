function solution(arr) {
  const start = arr.indexOf(2);
  // 배열에 2가 없을 경우
  if (start === -1) return [-1];

  const end = arr.lastIndexOf(2);
  return arr.slice(start, end + 1);
}

describe('2의 영역', () => {
  it('test', () => {
    expect(solution([1, 2, 1, 4, 5, 2, 9])).toEqual([2, 1, 4, 5, 2]);
    expect(solution([1, 2, 1])).toEqual([2]);
    expect(solution([1, 1, 1])).toEqual([-1]);
    expect(solution([2, 1, 1])).toEqual([2]);
    expect(solution([1, 2, 1])).toEqual([2]);
    expect(solution([1, 1, 2])).toEqual([2]);
    expect(solution([1, 1, 2, 2])).toEqual([2, 2]);
  });
});
