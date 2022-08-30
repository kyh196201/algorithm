/**
 * - 주어지는 것: 마라톤에 참가한 선수가 담긴 배열, 완주한 선수가 담긴 배열
 *
 * - 구해야하는 것: 완주하지 못한 선수 = completion에 없는 participant
 *
 * - 간단하게 생각해보기
 *
 * 	-	완주자를 순회하면서 map을 만든다. map의 key는 완주자의 이름 value는 숫자 (1로 시작, 이미 존재하면 + 1)
 *
 *  - 참가자를 순회한다.
 *
 * 	-	완주자 map에 없거나 값이 0일 경우 경우 => 정답
 *
 *  - 완주자 map에 있을 경우 count를 -1
 */

function solution(participant, completion) {
  const completions = new Map();

  completion.forEach(v => {
    const count = completions.get(v) || 0;

    completions.set(v, count + 1);
  });

  return 'leo';
}

describe('완주하지 못한 선수', () => {
  it('완주하지 못한 선수를 출력한다.', () => {
    expect(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])).toBe('leo');

    expect(
      solution(
        ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
        ['marina', 'josipa', 'nikola', 'filipa'],
      ),
    ).toBe('vinko');

    expect(
      solution(
        ['mislav', 'stanko', 'mislav', 'ana'],
        ['stanko', 'mislav', 'ana'],
      ),
    ).toBe('mislav');
  });
});
