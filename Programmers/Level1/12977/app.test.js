/**
 *  - 주어지는 것: 숫자가 들어있는 배열
 *
 *  - 구해야하는 것: 3개를 골라서 더했을 때 소수가 되는 경우의 개수
 *
 *  - 간단하게 생각해보기: 3개의 숫자를 고른다. 합을 구한다. 소수인지 판단한다. count를 증가한다.
 *
 *  소수 ? 약수가 없는 숫자
 */

/**
 * 소수 판별 알고리즘
 *
 * - 주어지는 것: 숫자
 *
 * - 구해야하는 것: 소수인지 여부
 *
 * - 간단하게 생각해보기
 *
 * 1. 숫자가 2보다 작을 경우 => 소수 아님
 *
 * 2. 숫자가 2이상일 경우
 *
 * 3. 2부터 자기의 제곱근과 같거나 작을때까지 나누면서 나누어떨어지는지 확인한다.
 */

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

describe('isPrime', () => {
  it('1은 소수가 아니다.', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('2는 소수다.', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('9는 소수가 아니다.', () => {
    expect(isPrime(9)).toBe(false);
  });
});

function solution(nums) {
  const numsLength = nums.length;
  let count = 0;

  for (let i = 0; i < numsLength - 2; i += 1) {
    for (let j = i + 1; j < numsLength - 1; j += 1) {
      for (let k = j + 1; k < numsLength; k += 1) {
        const sum = nums[i] + nums[j] + nums[k];

        if (isPrime(sum)) {
          count += 1;
        }
      }
    }
  }

  return count;
}

describe('소수 만들기', () => {
  it('3개를 뽑아서 더한 숫자중에 소수의 갯수를 출력합니다.', () => {
    expect(solution([1, 2, 3, 4])).toBe(1);
    expect(solution([1, 2, 7, 6, 4])).toBe(4);
  });
});
