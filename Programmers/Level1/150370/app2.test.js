/**
 * 이해
 *
 * 구해야할 것
 *
 * 조건
 *
 * 계획
 *
 * 반성
 *
 * - 유효기간을 더해줘서 만료일을 구할 필요가 없었음
 * - 현재 날짜 기준으로 달을 더하고 일 수로 반환하면 쉽게 날짜를 비교할 수 있다.
 */

// 년, 월, 일을 인자로 받아서 일 수를 계산
function convertToDateValue(year, month, date) {
  return year * 12 * 28 + month * 28 + date;
}

function solution(today = '', terms = [], privacies = []) {
  const answer = [];

  // 오늘 날짜를 일 수로 변환
  const todayDateValue = convertToDateValue(...today.split('.').map(v => +v));

  // 약관 별 유효기간
  const termPeriods = terms.reduce((acc, term) => {
    const [name, period] = term.split(' ');

    acc[name] = +period;

    return acc;
  }, {});

  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(' ');

    const [y, m, d] = date.split('.').map(v => +v);

    const dateValue = convertToDateValue(y, m + termPeriods[term], d);

    // 만료되었을 경우
    if (dateValue <= todayDateValue) {
      answer.push(index + 1);
    }
  });

  return answer;
}

describe('개인정보 수집 유효기간', () => {
  it('test', () => {
    expect(
      solution(
        '2022.05.19',
        ['A 6', 'B 12', 'C 3'],
        ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C'],
      ),
    ).toEqual([1, 3]);
  });
});
