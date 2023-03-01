/**
 * 이해
 * stack
 * 빵1 – 야채2 – 고기3 - 빵
 *
 * 구해야할 것
 * - 포장하는 햄버거의 개수
 *
 * 조건
 * 1, 2, 3, 1이 순서대로 나올 경우 포장 가능
 *
 * 계획
 * - ingredient를 문자열로 변환한다.
 * - 1231이 있는지 확인한다.
 *  - 있을 경우
 *    - count + 1
 *    - 문자열에서 1231을 제거한다.
 *
 *  - 없을 경우
 *    - return count
 */
function failedSolution(ingredients = []) {
  const regex = /1231/;

  let str = ingredients.join('');
  let count = 0;

  while (str.length) {
    if (!regex.test(str)) {
      break;
    }

    count += 1;
    str = str.replace(regex, '');
  }

  return count;
}

/**
 * 이해
 * stack
 * 빵1 – 야채2 – 고기3 - 빵
 *
 * 구해야할 것
 * - 포장하는 햄버거의 개수
 *
 * 조건
 * 1, 2, 3, 1이 순서대로 나올 경우 포장 가능
 *
 * 계획
 * - stack을 만들고, top의 초기 값은 -1
 * - ingredients을 하나씩 탐색한다.
 *
 * - 햄버거가 완성되었을 경우 => stack[top - 2] === 1 && stack [top - 1] === 2 && stack[top] === 3 && 현재 재료가 빵일 경우
 *  - stack에서 pop() * 3
 *  - top = top - 3
 *
 * - 아닐 경우
 *  - stack에 push
 *  - top = top + 1
 */
function solution(ingredients = []) {
  const BREAD = 1;
  const VEGI = 2;
  const MEAT = 3;

  const stack = [];
  let top = -1;
  let count = 0;

  ingredients.forEach(ingredient => {
    // hamburger
    if (
      stack[top - 2] === BREAD &&
      stack[top - 1] === VEGI &&
      stack[top] === MEAT &&
      ingredient === BREAD
    ) {
      // stack.pop();
      // stack.pop();
      // stack.pop();
      stack.splice(-3);

      top -= 3;

      count += 1;

      return;
    }

    stack.push(ingredient);
    top += 1;
  });

  return count;
}

describe('햄버거 만들기', () => {
  it('test', () => {
    // 실패한 풀이
    expect(failedSolution([1, 2, 3, 1])).toBe(1);
    expect(failedSolution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
    expect(failedSolution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);

    //
    expect(solution([1, 2, 3, 1])).toBe(1);
    expect(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])).toBe(2);
    expect(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])).toBe(0);
  });
});
