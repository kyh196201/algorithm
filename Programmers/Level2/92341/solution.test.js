/*
	[문제 설명]
 	- 차량 별 청구 요금 구하고, 차량 번호 오름차순으로 정렬해서 반환

	[풀이 방법]
	- 청구 요금 = fees[1] + (Math.ceil((parkingTime - fees[0]) / fees[2]) * fees[3])
	- 입차일 경우 parkings 객체에 { 차번호 : parkings[차번호] + (1439 - 입차 시간) } 저장
	- 출차일 경우 parkings 객체에 { 차번호 : parkings[차번호] - (1439 - 출차 시간) } 저장
	- parkings 객체에 차랑 별 누적 주차 시간을 저장하고, 청구 요금을 계산해서 반환
 */

function solution(fees, records) {
  const parkings = {};

  records.forEach(record => {
    const [time, car, type] = record.split(' ');
    const [hh, mm] = time.split(':').map(Number);
    const minutes = hh * 60 + mm;

    if (!parkings[car]) parkings[car] = 0;

    if (type === 'IN') {
      parkings[car] += 1439 - minutes;
    } else {
      parkings[car] -= 1439 - minutes;
    }
  });

  return Object.entries(parkings)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([, time]) => {
      if (time <= fees[0]) return fees[1];

      return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    });
}

describe('주차 요금 계산', () => {
  it('test', () => {
    expect(
      solution(
        [180, 5000, 10, 600],
        [
          '05:34 5961 IN',
          '06:00 0000 IN',
          '06:34 0000 OUT',
          '07:59 5961 OUT',
          '07:59 0148 IN',
          '18:59 0000 IN',
          '19:09 0148 OUT',
          '22:59 5961 IN',
          '23:00 5961 OUT',
        ],
      ),
    ).toEqual([14600, 34400, 5000]);
  });
});
