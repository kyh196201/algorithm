/**
 * 이해
 *
 * food[]에는 각 음식의 개수가 담겨있다.
 *
 * 구해야하는 것
 * 대회를 위한 음식의 배치
 *
 * 조건
 * food[0]은 항상 물의 개수이고, 값은 1이다.
 *
 * 계획
 * 한 사람이 먹게될 음식의 배치를 구한다.
 *
 * food의 각 원소를 2로 나눈 몫을 가지는 새로운 배열을 구한다. [1 3, 4, 6] => [0, 1, 2, 3]
 *
 * map을 이용해서 배열의 각 index가 원소의 값 만큼의 길이를 가지고 있는 문자열로 이루어진 배열을 구한다.
 * ([0, 1, 2, 3] => ['', '1', '22', '333'])
 *
 * 음식 배치의 가운데는 항상 0이 들어가므로 정답은 한사람의 배치 + '0' + 한사람의 배치의 역순이 된다.
 */

function solution(foods = []) {
  const foodStrings = foods
    .map(food => Math.floor(food / 2))
    .map((food, index) => {
      if (food < 1) return '';

      return String(index).repeat(food);
    });

  return `${foodStrings.join('')}0${foodStrings.reverse().join('')}`;
}

describe('푸드 파이트 대회', () => {
  it('test', () => {
    expect(solution([1, 3, 4, 6])).toBe('1223330333221');
    expect(solution([1, 7, 1, 2])).toBe('111303111');
  });
});
