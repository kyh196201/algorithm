function solution(number = '') {
  let sum = 0;
  // 문자열 number의 각 자리 숫자를 모두 더함
  // eslint-disable-next-line no-restricted-syntax
  for (const num of number) {
    sum += +num;
  }

  // 구한 합을 9로 나눈 나머지를 반환
  return sum % 9;
}

describe('', () => {
  it('test', () => {
    expect(solution('78720646226947352489')).toBe(2);
  });
});
