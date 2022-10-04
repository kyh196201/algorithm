/**
 * 이해
 * 구해야하는 것
 * - 필요한 구명보트 개수의 최솟값
 *
 * 주어지는 것
 * - 사람의 무게가 담긴 배열
 * - 구명보트의 무게 제한
 *
 * 조건
 * - 40 <= 사람 몸무게 <= 240
 * - 40 <= 구명보트 무게 제한 <= 240
 *
 * 계획
 * - 주어진 people을 내림차순으로 정렬
 * - 보트들을 담을 boats배열을 선언 boats = []
 * - 숫자가 들어갈 수 있는 boat가 있을 경우 해당 boat에 값을 더함
 * - 들어갈 수 있는 boat가 없을 경우 boat에 값을 push
 *
 * 반성
 */

function sortDescending(array = []) {
  return array.sort((a, b) => b - a);
}

test('test', () => {
  expect(sortDescending([70, 50, 80, 50])).toEqual([80, 70, 50, 50]);
});

function solution(people = [], limit = 40) {
  if (people.length === 1) return 1;

  const peopleDescending = sortDescending(people);

  const 절반초과인사람들 = [];
  const 절반이하인사람들 = [];

  peopleDescending.forEach(weight => {
    if (weight > limit / 2) {
      절반초과인사람들.push(weight);
    } else {
      절반이하인사람들.push(weight);
    }
  });

  절반이하인사람들.forEach(weight => {
    const 탑승가능 = 절반초과인사람들.some((value, index) => {
      if (value + weight <= limit) {
        절반초과인사람들[index] += weight;

        return true;
      }

      return false;
    });

    if (!탑승가능) 절반초과인사람들.push(weight);
  });

  return 절반초과인사람들.length;
}

describe('구명보트', () => {
  it('test', () => {
    expect(solution([70], 100)).toEqual(1);

    expect(solution([50, 50], 150)).toEqual(1);

    expect(solution([70, 50, 80, 50], 100)).toEqual(3);

    expect(solution([70, 80, 50], 100)).toEqual(3);

    expect(solution([70, 50, 80, 50], 150)).toEqual(2);

    expect(solution([30, 40, 50, 60], 100)).toEqual(2);
  });
});
