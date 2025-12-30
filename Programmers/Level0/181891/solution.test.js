/**
 *
 * @param {number[]} nums
 * @param {number} n
 * @returns
 */
function solution(nums, n) {
  const pulled = nums.splice(0, n); // 앞 부분 n개의 원소를 잘라냄 (0 ~ n-1)
  nums.push(...pulled); // 잘라낸 것을 뒤에 붙임

  return nums;
}

describe('순서 바꾸기', () => {
  it('test', () => {
    expect(solution([2, 1, 6], 1)).toEqual([1, 6, 2]);
  });
});
