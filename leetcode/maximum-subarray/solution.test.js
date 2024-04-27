/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 합이 최대가 되는 subarray을 구하고, 총 합을 리턴
 *
 * 조건
 * - 1 <= nums.length <= 10^5
 * - 10^4 <= nums[i] <= 10^4
 *
 * 계획
 * - 카데인 알고리즘
 * - (0 ~ i) 까지 존재하는 subarray들의 합 중에서 최대 값은 (0 ~ i-1)에서 구한 최대 값에 i번째 숫자를 더한 값과 i번째 숫자 중에서 더 큰 값과 같다.
 * - 이를 수식으로 표현하면 다음과 같다. max = Math.max(subarray(i - 1) + nums[i], nums[i])
 * - i를 1부터 마지막 인덱스까지 탐색하면서 각 인덱스마다 subarray의 최대값을 비교해서 가장 큰 값을 구하면 된다.
 * - max와 answer 변수에 nums[0]을 할당하고 시작할 수 있기 때문에 i를 1부터 탐색하면 된다.
 *
 * 반성
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function bruteForce(nums) {
  let answer = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > answer) answer = sum;
    }
  }

  return answer;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
  let max = nums[0];
  let answer = nums[0];

  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max + nums[i], nums[i]);
    if (max > answer) {
      answer = max;
    }
  }

  return answer;
}

describe('maximum-subarray', () => {
  it.only('brute force', () => {
    expect(bruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(bruteForce([1])).toBe(1);
    expect(bruteForce([5, 4, -1, 7, 8])).toBe(23);
  });

  it('카데인 알고리즘', () => {
    expect(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(solution([1])).toBe(1);
    expect(solution([5, 4, -1, 7, 8])).toBe(23);
  });
});
