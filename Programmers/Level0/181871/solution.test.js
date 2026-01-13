function solution(string, part) {
  const n = part.length;
  let count = 0;

  // 부분 문자열을 만들 수 있는 최대 인덱스가 string.length - n
  for (let i = 0; i <= string.length - n; i++) {
    if (string.slice(i, i + n) === part) count += 1;
  }

  return count;
}

describe('문자열이 몇 번 등장하는지 세기', () => {
  it('test', () => {
    expect(solution('banana', 'ana')).toBe(2);
    expect(solution('aaaa', 'aa')).toBe(3);
  });
});
