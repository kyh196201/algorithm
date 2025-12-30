function solution(string) {
  const answer = Array(52).fill(0);

  // 대문자 알파벳, 소문자 알파벳으로 이루어진 배열을 구한다
  const alphabets = [
    ...Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65)), // A~Z : 65 ~ 90
    ...Array.from({length: 26}, (_, i) => String.fromCharCode(i + 97)), // a~z : 97 ~ 122
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const char of string) {
    // 글자가 들어갈 자리(인덱스)를 구한다
    const index = alphabets.indexOf(char);
    answer[index] += 1;
  }

  return answer;
}

describe('', () => {
  it('test', () => {
    expect(solution('Programmers')).toEqual([
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0,
      0, 0,
    ]);
  });
});
