/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 케이크를 공평하게 나눌 수 있는 경우의 수(나눈 두 배열에 있는 원소의 종류의 개수가 같아야 한다)
 *
 * 조건
 *
 * 계획
 * - 배열을 나눌 수 있는 모든 경우의 수를 구한다
 * - 두 배열에 있는 종류의 수를 세고, 같을 경우 count를 증가한다

  // 1. 등장하는 토핑의 개수가 담긴 map을 선언
  // 2. 철수의 토핑의 개수를 세는 Set, 동생의 토핑의 개수를 세는 Set 선언
  // 3. 철수의 Set에는 최초 모든 토핑을 담고, 동생의 Set은 빈 상태
  // 4. 철수의 Set이 동생의 Set보다 클 경우
  // 4.1 배열의 현재 index에 해당하는 요소를 동생의 Set에 추가, 개수가 담긴 map에서 개수 1 감소, 개수가 0이 될 경우 철수의 Set에서 제거
  // 5. 철수와 동생의 Set.size가 같을 경우 count 1 증가
  // 5.1 4.1과 동일하게 진행
  // 6. 철수의 Set.size가 더 작을 경우 더이상 검사할 경우의 수가 없으므로 반복문 종료
 *
 * 반성
 */

// [1, 2, 1, 3, 1, 4, 1, 2]
// [1] [2, 1, 3, 1, 4, 1, 2]
// [1, 2] [1, 3, 1, 4, 1, 2]
// [1, 2, 1] [3, 1, 4, 1, 2]
// [1, 2, 1, 3] [1, 4, 1, 2] O
// [1, 2, 1, 3, 1] [4, 1, 2] O
// [1, 2, 1, 3, 1, 4] [1, 2]
// [1, 2, 1, 3, 1, 4, 1] [2]

function solution(toppings = []) {
  if (toppings.length === 1) {
    return 0;
  }

  const first = new Set();
  const second = new Set(toppings);
  const map = new Map();
  let index = 0;
  let count = 0;

  toppings.forEach(topping => {
    map.set(topping, (map.get(topping) || 0) + 1);
  });

  while (first.size <= second.size && index < toppings.length) {
    if (first.size === second.size) {
      count += 1;
    }

    const topping = toppings[index];

    first.add(topping);

    map.set(topping, map.get(topping) - 1);
    if (map.get(topping) <= 0) {
      second.delete(topping);
    }

    index += 1;
  }

  return count;
}

describe('롤케이크 자르기', () => {
  it('test', () => {
    expect(solution([1])).toBe(0);
    expect(solution([1, 2, 3, 1, 4])).toBe(0);
    expect(solution([1, 2, 1, 3, 1, 4, 1, 2])).toBe(2);
  });
});
