/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 * - 최대 수익
 * - 수익을 낼 수 없을 경우 0 리턴
 *
 * 조건
 * 1 <= prices.length <= 10^5
 *
 * 계획
 * - 수익 = prices[sell] - prices[buy]
 * - 최대 수익 = 가장 비싸게 판 값 - 가장 싸게 구매한 값
 *
 * 반성
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
function solution(prices) {
  let max = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - prices[i];
      if (profit > max) max = profit;
    }
  }

  return max;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function solution2(prices) {
  if (prices.length <= 1) {
    return 0;
  }

  let buy = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else if (prices[i] - buy > maxProfit) {
      maxProfit = prices[i] - buy;
    }
  }

  return maxProfit;
}

/**
 * @param {number[]} prices
 * @return {number}
 */
function solution3(prices) {
  let buy = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 최소 구매 값 갱신
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      const profit = prices[i] - buy;
      // 최대 수익 갱신
      maxProfit = Math.max(maxProfit, profit);
    }
  }

  return maxProfit;
}

describe('best-time-to-buy-and-sell-stock', () => {
  it('test', () => {
    // 시간 초과
    expect(solution([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(solution([7, 6, 4, 3, 1])).toBe(0);
    expect(solution([1, 2])).toBe(1);
    expect(solution([2, 4, 1])).toBe(2);
  });

  it('test2', () => {
    expect(solution2([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(solution2([7, 6, 4, 3, 1])).toBe(0);
    expect(solution2([1, 2])).toBe(1);
    expect(solution2([2, 4, 1])).toBe(2);
  });

  it('test3', () => {
    expect(solution3([7, 1, 5, 3, 6, 4])).toBe(5);
    expect(solution3([7, 6, 4, 3, 1])).toBe(0);
    expect(solution3([1, 2])).toBe(1);
    expect(solution3([2, 4, 1])).toBe(2);
  });
});
