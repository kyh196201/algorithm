function hasDuplicatedNumber(numbers = []) {
  /**
   * 1. 첫번째 원소 부터 하나씩 차례로 선택한다.
   * 2. 선택한 원소를 기준으로 다음 원소부터 마지막 원소까지 비교하면서 같은 값이 있는지 찾는다.
   * 3. 같은 값이 있을 경우 true를 리턴한다.
   * 4. 같은 값이 없을 경우 다음 원소로 이동하고, 같은 동작을 반복한다.
   * 5. 마지막 요소까지 탐색을 완료했을 경우 false를 리턴한다.
   */
  for (let i = 0; i < numbers.length - 1; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        return true;
      }
    }
  }

  return false;
}

function hasDuplicatedNumber2(numbers = []) {
  /**
   * 1. 첫번째 원소 부터 하나씩 차례로 선택한다.
   * 2. 해당 숫자를 방문한 적이 있는지 확인한다. (배열을 하나 더 만들고, 배열에 해당 숫자를 인덱스로 접근해서 값을 true로 설정한다)
   * 3. true일 경우 중복된 숫자이므로 true를 리턴한다.
   * 4. 마지막 원소까지 탐색했을 경우 false를 리턴한다.
   */
  const existNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (existNumbers[number]) {
      return true;
    }

    existNumbers[number] = true;
  }

  return false;
}

describe('배열 안에 중복된 숫자 찾기', () => {
  it('', () => {
    expect(hasDuplicatedNumber([1, 2, 3, 4, 5, 6, 7, 1])).toBe(true);
    expect(hasDuplicatedNumber([1, 2, 3, 4, 5, 6, 7])).toBe(false);
    expect(hasDuplicatedNumber2([1, 2, 3, 4, 5, 6, 7, 1])).toBe(true);
    expect(hasDuplicatedNumber2([1, 2, 3, 4, 5, 6, 7])).toBe(false);
  });
});
