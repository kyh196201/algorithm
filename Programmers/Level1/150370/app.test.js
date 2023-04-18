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

function getExpiredDate(fullDate = '', value = 1) {
  const [year, month, date] = fullDate.split('.');

  // month to number
  const addedMonth = Number(month) + value;

  // 12의 배수 면 12월, 아닐 경우 나머지
  const monthMod = addedMonth % 12 === 0 ? 12 : addedMonth % 12;

  // year에 더해줄 값
  // 12의 배수일 경우 몫 - 1, 아닐 경우 몫
  const monthQuotient =
    addedMonth % 12 === 0
      ? Math.floor(addedMonth / 12) - 1
      : Math.floor(addedMonth / 12);

  const nextMonth = monthMod.toString().padStart(2, '0');

  const nextYear = Number(year) + monthQuotient;

  return [nextYear, nextMonth, date].join('.');
}

// 만료 여부 만료일 >= 오늘 날짜
function isExpired(expiredDate, todayDate) {
  return (
    Number(todayDate.replaceAll('.', '')) >=
    Number(expiredDate.replaceAll('.', ''))
  );
}

function solution(today = '', terms = [], privacies = []) {
  const answer = [];

  const termsObj = {};

  // 1. terms object 생성
  terms.forEach(term => {
    const [termName, termValue] = term.split(' ');

    termsObj[termName] = Number(termValue);
  });

  // 2. 개인정보 별 만료일 설정
  const expiredDates = privacies.map(privacy => {
    const [date, termName] = privacy.split(' ');

    const termValue = termsObj[termName];

    const expiredDate = getExpiredDate(date, termValue);

    return expiredDate;
  });

  expiredDates.forEach((expiredDate, index) => {
    if (isExpired(expiredDate, today)) {
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
