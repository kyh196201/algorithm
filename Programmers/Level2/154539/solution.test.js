function mySolution(numbers) {
  const answer = Array(numbers.length).fill(-1);

  // 탐색한 수 중에서 가장 큰 수를 저장, 마지막 인덱스에 해당하는 숫자 저장
  let maxNumber = numbers[numbers.length - 1];

  // 배열의 마지막 원소의 바로 전 원소부터 탐색
  for (let i = numbers.length - 2; i >= 0; i--) {
    // 바로 뒤 숫자가 더 클 경우 answer 배열에 저장
    if (numbers[i + 1] > numbers[i]) {
      answer[i] = numbers[i + 1];
    } else if (numbers[i] < maxNumber) {
      // 현재 숫자보다 더 큰 값이 뒤에 존재할 경우(현재 수 < 최댓값)
      // answer 배열에서 뒷 큰수를 탐색
      for (let j = i + 1; j < answer.length - 1; j++) {
        if (answer[j] > numbers[i]) {
          answer[i] = answer[j];
          break;
        }
      }
    }

    // 최댓값 갱신
    maxNumber = Math.max(maxNumber, numbers[i]);
  }

  return answer;
}

// 참고: https://sasca37.tistory.com/306
function solutionWithStack(numbers) {
  // number index 정보를 담을 스택 선언
  const stack = [];
  // 현재 스택이 바라보고 있는 값 반환
  const peekStack = () => stack[stack.length - 1];

  // 정답 배열 선언
  const answer = Array(numbers.length);

  // 첫 번째 number 인덱스를 스택에 push
  stack.push(0);

  // 두 번째 원소부터 numbers 탐색
  for (let i = 1; i < numbers.length; i++) {
    // 스택이 비어있지 않으면서 현재 스택이 바라보고 있는 값보다 numbers[i]의 값이 크면 뒤 큰 수 해당
    while (stack.length > 0 && numbers[peekStack()] < numbers[i]) {
      // 뒤 큰수를 찾은 모든 값 pop
      answer[stack.pop()] = numbers[i];
    }

    // 현재 인덱스 push
    stack.push(i);
  }

  // 모든 인덱스를 탐색 후 스택에 남아있는 값 탐색
  while (stack.length > 0) {
    // 뒤 큰수가 없는 경우 -1
    answer[stack.pop()] = -1;
  }

  return answer;
}

describe('뒤에 있는 큰 수 찾기', () => {
  it('내 풀이', () => {
    expect(mySolution([2, 3, 3, 5])).toEqual([3, 5, 5, -1]);
  });

  it('stack', () => {
    expect(solutionWithStack([2, 3, 3, 5])).toEqual([3, 5, 5, -1]);
  });
});
