/**
 * 0. 3장의 카드의 합을 저장할 maxSum = 0을 전역 변수로 선언한다.
 * 1. N장의 카드 중에서 3개를 뽑는 모든 경우를 탐색한다.
 * 2. 3장의 카드의 합을 구하고, max보다 작거나 같고, maxSum 보다 클 경우 maxSum을 새로운 합으로 변경한다.
 * 3. 3장의 카드를 뽑기위해서 3개의 반복문을 사용한다.
 */

const length = 10;
const max = 500;
const cards = [93, 181, 245, 214, 315, 36, 185, 138, 216, 295];
let maxSum = 0;

function solution() {
  for (let i = 0; i < length - 2; i += 1) {
    for (let j = i + 1; j < length - 1; j += 1) {
      for (let k = j + 1; k < length; k += 1) {
        const sum = cards[i] + cards[j] + cards[k];

        if (max >= sum && sum > maxSum) {
          maxSum = sum;
        }
      }
    }
  }
}

solution();

console.log(maxSum);
