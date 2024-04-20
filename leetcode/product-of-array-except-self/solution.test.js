/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - result[i]는 nums에서 i번째 요소를 제외한 숫자들의 곱이 저장된다
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function solution(nums) {
  const answer = [];
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    let product = 1;

    for (let j = 0; j < len; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }

    answer[i] = product;
  }

  return answer;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function solution2(nums) {
  const product = nums.reduce((pro, num) => pro * num, 1);

  const answer = nums.map(num => product / num);

  return answer;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function solution3(nums) {
  /**
   * prefix[i] = (nums[0] * nums[1] * ..) * nums[i - 1]
   * prefix[i] = prefix[i - 1] * nums[i - 1]
   * suffix[i] = nums[i + 1] * (nums[i + 2] * ... * nums[nums.length - 1])
   * suffix[i] = nums[i + 1] * suffix[i + 1]
   * answer[i] = prefix[i] * suffix[i]
   */
  const len = nums.length;
  const answer = [];
  const prefix = [];
  const suffix = [];
  prefix[0] = 1;
  suffix[len - 1] = 1;

  for (let i = 1; i < len; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  for (let j = len - 2; j >= 0; j--) {
    suffix[j] = suffix[j + 1] * nums[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix[i] * suffix[i];
  }

  return answer;
}

describe('product-of-array-except-self', () => {
  it('test', () => {
    expect(solution([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('test2', () => {
    expect(solution2([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('test3', () => {
    expect(solution3([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
