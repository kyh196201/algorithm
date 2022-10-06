/**
 * 이해
 * 구해야하는 것
 * - 필요한 구명보트 개수의 최솟값
 *
 * 주어지는 것
 * - 사람의 무게가 담긴 배열
 * - 구명보트의 무게 제한
 *
 * 조건
 * - 40 <= 사람 몸무게 <= 240
 * - 40 <= 구명보트 무게 제한 <= 240
 *
 * 계획
 * - 주어진 people을 내림차순으로 정렬
 * - 보트들을 담을 boats배열을 선언 boats = []
 * - 숫자가 들어갈 수 있는 boat가 있을 경우 해당 boat에 값을 더함
 * - 들어갈 수 있는 boat가 없을 경우 boat에 값을 push
 *
 * 반성
 * - 기존의 풀이 방법을 버리고 투 포인터 알고리즘을 사용해서 풀이했다.
 * - 투 포인턴 알고리즘은 이 글을 참고함(https://velog.io/@9ummy/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%ED%88%AC-%ED%8F%AC%EC%9D%B8%ED%84%B0-%EA%B5%AC%EA%B0%84-%ED%95%A9-JavaScript)
 */

function sortDescending(array = []) {
  return array.sort((a, b) => b - a);
}

test('test', () => {
  expect(sortDescending([70, 50, 80, 50])).toEqual([80, 70, 50, 50]);
});

function solution(people = [], limit = 40) {
  let answer = 0;
  let sum = 0;
  let end = people.length - 1;
  people = sortDescending(people);

  // 양 끝 점에서 시작
  for (let start = 0; start < people.length; start += 1) {
    // >=가 아닌 이유는 원소의 개수가 홀수일 경우 start, end가 같아지는 상황이 발생하기 때문!
    if (start > end) {
      break;
    }

    // 처음 시작점의 값을 합에 저장
    sum = people[start];

    // 합이 최대값보다 커지거나 끝점이 시작점과 같아지면 while 종료
    while (sum <= limit && start < end) {
      sum += people[end];
      end -= 1;
    }
    answer += 1;

    // 만약 합이 최대값보다 커졌을 경우 마지막으로 더한 사람은 보트에 태울 수 없으므로 다시 뒤로 한칸 이동해야한다.
    if (sum > limit) {
      end += 1;
    }
  }

  return answer;
}

describe('구명보트', () => {
  it('test', () => {
    expect(solution([70], 100)).toEqual(1);

    expect(solution([50, 50], 150)).toEqual(1);

    expect(solution([70, 50, 80, 50], 100)).toEqual(3);

    expect(solution([70, 80, 50], 100)).toEqual(3);

    expect(solution([70, 50, 80, 50], 150)).toEqual(2);

    expect(solution([30, 40, 50, 60], 100)).toEqual(2);
  });
});
