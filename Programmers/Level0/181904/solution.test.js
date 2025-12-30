function solution(myString, m, c) {
  let answer = '';

  for (let i = c - 1; i < myString.length; i += m) {
    answer += myString[i];
  }

  return answer;
}

describe('', () => {
  it('test', () => {
    expect(solution('ihrhbakrfpndopljhygc', 4, 2)).toBe('happy');
  });
});
