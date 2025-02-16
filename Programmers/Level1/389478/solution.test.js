function solution(n, w, num) {
  const maxLine = Math.ceil(n / w);
  const line = Math.ceil(num / w);
  const count = maxLine - line + 1;

  // 모든 칸이 꽉 찬 경우
  // 1. w가 1일 경우
  // 2. n이 w의 배수일 경우
  if (n % w === 0) {
    return count;
  }

  // num이 홀수 줄일 경우 (num - 1)을 w로 나눈 나머지 + 1
  // 짝수 줄일 경우 w - ((num - 1)을 w로 나눈 나머지)
  const 칸번호 = line % 2 ? ((num - 1) % w) + 1 : w - ((num - 1) % w);

  // 마지막 줄이 홀수일 경우 마지막 줄의 시작 숫자 + 칸 - 1
  // 마지막 줄이 짝수일 경우 마지막 줄의 시작 숫자 - 칸 + 1
  const 마지막수 =
    maxLine % 2 ? (maxLine - 1) * w + 1 + 칸번호 - 1 : maxLine * w - 칸번호 + 1;

  // 마지막 수가 포함될 경우
  if (마지막수 <= n) return count;

  // 마지막 수가 포함되지 않을 경우
  return count - 1;
}

describe('택배상자 꺼내기', () => {
  it('test', () => {
    expect(solution(22, 6, 8)).toBe(3);
    expect(solution(13, 3, 6)).toBe(4);
  });
});
