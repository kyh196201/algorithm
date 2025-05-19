function solution(prices = []) {
  const stack = [];
  const answer = [];

  prices.forEach((price, index) => {
    let top = stack.length - 1;

    while (stack.length && stack[top].price > price) {
      answer[stack[top].index] = index - stack[top].index;
      stack.pop();
      top -= 1;
    }

    stack.push({price, index});
  });

  while (stack.length) {
    const {index} = stack.pop();

    answer[index] = prices.length - 1 - index;
  }

  return answer;
}

function solution2(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let found = false;

    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] > prices[j]) {
        answer[i] = j - i;
        found = true;
        break;
      }
    }

    if (!found) {
      answer[i] = prices.length - 1 - i;
    }
  }

  return answer;
}

describe('주식가격', () => {
  it('test', () => {
    expect(solution([1, 2, 3, 2, 3])).toEqual([4, 3, 1, 1, 0]);
    expect(solution([3, 2, 1])).toEqual([1, 1, 0]);
    expect(solution([1, 4, 5, 6, 2, 1])).toEqual([5, 3, 2, 1, 1, 0]);
  });

  it('test2', () => {
    expect(solution2([1, 2, 3, 2, 3])).toEqual([4, 3, 1, 1, 0]);
    expect(solution2([3, 2, 1])).toEqual([1, 1, 0]);
    expect(solution2([1, 4, 5, 6, 2, 1])).toEqual([5, 3, 2, 1, 1, 0]);
  });
});
