function solution(code) {
  let mode = 0;
  let answer = '';

  for (let i = 0; i < code.length; i++) {
    if (code[i] === '1') {
      // 현재 글자가 1일 경우 mode를 바꾼다
      mode = mode === 0 ? 1 : 0;
    } else if (i % 2 === mode) {
      // mode가 0이면 짝수 번째 글자를 추가
      // mode가 1이면 홀수 번째 글자를 추가
      answer += code[i];
    }
  }

  // answer가 빈 문자열일 경우 'EMPTY'를 반환
  return answer.length > 0 ? answer : 'EMPTY';
}

describe('코드 처리하기', () => {
  it('test', () => {
    expect(solution('abc1abc1abc')).toBe('acbac');
  });
});
