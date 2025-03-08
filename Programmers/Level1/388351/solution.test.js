function 출근가능시간구하기(시간) {
  let 시 = Math.floor(시간 / 100);
  let 분 = 시간 % 100;

  분 += 10;
  if (분 >= 60) {
    분 %= 60;
    시 += 1;
  }

  return 시 * 100 + 분;
}

function solution(schedules, timelogs, startday) {
  let answer = 0;

  schedules.forEach((schedule, index) => {
    const 출근기록 = timelogs[index];
    const 출근가능시간 = 출근가능시간구하기(schedule);

    const 개근 = 출근기록.every((출근시간, i) => {
      const 요일 = (i + startday) % 7;
      // 토요일 또는 일요일일 경우
      if (요일 === 6 || 요일 === 0) {
        return true;
      }

      return 출근시간 <= 출근가능시간;
    });

    if (개근) answer++;
  });

  return answer;
}

describe('유연근무제', () => {
  it('test', () => {
    expect(
      solution(
        [700, 800, 1100],
        [
          [710, 2359, 1050, 700, 650, 631, 659],
          [800, 801, 805, 800, 759, 810, 809],
          [1105, 1001, 1002, 600, 1059, 1001, 1100],
        ],
        5,
      ),
    ).toBe(3);
  });
});
