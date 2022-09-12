/* eslint-disable no-restricted-syntax */
/**
 * 이해
 *
 * 주어지는 것
 * - 질문마다 판단하는 지표를 담은 문자열 배열과 선택한 선택지를 담은 배열
 *
 * 구해야하는 것
 * - 성격 유형 검사 결과
 *
 * 조건
 * - 유형의 점수를 합한 결과가 같은 경우 사전 순으로 먼저오는 유형을 선택한다.
 *
 * 계획
 * - 각 성격 유형별로 점수와 지표를 저장할 수 있는 객체를 생성
 * - for문을 이용해서 survey와 choices를 이용해 각 성격 유형별로 점수를 합산
 * - 1 ~ 4까지 for문을 이용, 각 지표에 속하는 성격 유형을 가져오고 둘 중에 큰 값을 result에 더한다.
 *
 * 반성
 * - 지표를 characters에 저장하고, map을 이용해서 정답을 도출한 방법이 좋았다고 생각한다.
 * - (점수 - 4)를 해서 성격 유형의 점수를 계산한 것도 좋았다.
 * - 사전 순으로 낮은 성격 유형이 항상 먼저오기 때문에 c1, c2의 점수를 비교한 부분도 좋았다.
 *
 * - points의 각 속성을 미리 선언하지 않았어도 괜찮았을 것 같다.
 * - c1, c2 변수명을 좀더 명시적으로 선언하는 것이 좋을 것 같다.
 */
function solution(survey = [], choices = []) {
  const characters = ['RT', 'CF', 'JM', 'AN'];

  const points = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  // 점수 주기
  for (let i = 0; i < survey.length; i += 1) {
    const character = survey[i].split('');

    const choice = choices[i] - 4;

    // 비동의
    if (choice < 0) {
      points[character[0]] += choice * -1;
    } else if (choice > 0) {
      // 동의
      points[character[1]] += choice;
    }
  }

  const result = characters.map(character => {
    const [c1, c2] = character.split('');

    return points[c2] > points[c1] ? c2 : c1;
  });

  return result.join('');
}

describe('성격 유형 검사하기', () => {
  const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
  const choices = [5, 3, 2, 7, 5];
  const expected = 'TCMA';

  const survey2 = ['TR', 'RT', 'TR'];
  const choices2 = [7, 1, 3];
  const expected2 = 'RCJA';

  it('test', () => {
    expect(solution(survey, choices)).toBe(expected);

    expect(solution(survey2, choices2)).toBe(expected2);
  });
});
