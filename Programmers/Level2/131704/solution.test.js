/* eslint-disable no-restricted-syntax */
function solution(orders) {
  // 담은 택배의 개수
  let count = 0;
  // 현재 컨테이너의 순서
  let containerOrder = 1;
  // 보조 컨테이너 스택
  const subContainer = [];

  for (const order of orders) {
    // 현재 실어야되는 택배의 순서와 컨테이너의 순서가 같을 경우
    if (order === containerOrder) {
      count += 1;
      containerOrder += 1;
    } else if (order > containerOrder) {
      /*
				실어야되는 택배의 순서가 컨테이너의 순서보다 클 경우 컨테이너의 택배를 보조 컨테이너에 옮김
				컨테이너의 순서가 택배의 순서와 같아질 때까지 보조 컨테이너에 컨테이너의 택배를 싣는다
			 */
      while (order > containerOrder) {
        subContainer.push(containerOrder);
        containerOrder += 1;
      }

      // while문을 빠져나왔을 때 order === containerOrder이므로 컨테이너의 순서를 1 증가한다.
      containerOrder += 1;
      count += 1;
    } else if (order === subContainer.pop()) {
      // 택배의 순서가 컨테이너의 순서보다 작을 경우 보조 컨테이너를 확인해야 한다.
      // (주 컨테이너가 오름차순이므로 현재 실어야되는 택배는 반드시 보조 컨테이너에 존재한다.)
      count += 1;
    } else {
      // 보조 컨테이너에서도 택배를 꺼낼 수 없을 경우 더이상 택배를 실을 수 없으므로 함수를 종료
      return count;
    }
  }

  return count;
}

describe('택배상자', () => {
  it('test', () => {
    expect(solution([4, 3, 1, 2, 5])).toBe(2);
    expect(solution([5, 4, 3, 2, 1])).toBe(5);
    expect(solution([2, 1, 4, 3, 5])).toBe(5);
    expect(solution([4, 3, 5, 1, 2])).toBe(3);
  });
});
