/**
 *
 * @param {Array<number>} arr
 */
function solution(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (!stk.length) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.at(-1) < arr[i]) {
      stk.push(arr[i]);
      i += 1;
    } else if (stk.at(-1) >= arr[i]) {
      stk.pop();
    }
  }

  return stk;
}

describe('', () => {
  it('test', () => {
    expect(solution([1, 4, 2, 5, 3])).toEqual([1, 2, 3]);
  });
});
