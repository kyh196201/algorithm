/**
 * 이해
 *
 * 주어지는 것
 * - 친구들의 이름을 담은 배열
 * - 선물 기록이 담긴 배열
 *
 * 구해야하는 것
 * - 가장 선물을 많이 받을 친구가 받을 선물의 개수
 *
 * 조건
 * - 선물 지수 = 이번 달까지 자신이 친구들에게 준 선물의 수의 총 합 - 이번 달까지 친구들에게 받은 선물의 수의 총 합
 * - A가 B에게 선물을 받는지 여부
 * 	- 1. A가 B에게 준 선물의 개수 > B가 A에게 준 선물의 개수
 * 	- 2. A의 선물 지수 > B의 선물 지수
 *
 * 계획
 * - friends를 순회하면서 빈 노드 생성
 * - gifts를 순회해서 사람별로 주고, 받은 선물의 개수를 기록
 * - friends를 순회하면서 한 명씩 선물을 받는지를 확인, 받을 선물의 개수를 카운팅
 * - 기록한 받을 선물의 개수 중에서 최대 값을 반환
 *
 * 반성
 */

class Graph {
  constructor(array = []) {
    this.nodes = {};
    array.forEach(item => {
      this.nodes[item] = {
        gives: {},
        receives: 0,
      };
    });
  }

  give(from, to) {
    const node = this.nodes[from];

    if (node.gives[to] === undefined) {
      node.gives[to] = 0;
    }

    node.gives[to] += 1;

    this.receive(to);
  }

  receive(to) {
    const node = this.nodes[to];
    node.receives += 1;
  }

  totalGives(name) {
    const node = this.nodes[name];

    return Object.values(node.gives).reduce((acc, cur) => acc + cur, 0);
  }

  // 선물 지수 반환
  getIndex(name) {
    const node = this.nodes[name];

    return this.totalGives(name) - node.receives;
  }

  // 비교 1, 0, -1
  // 1일 경우 a > b = a가 선물 받음
  // 0일 경우 a == b = 선물 X
  // -1일 경우 a < b = b가 선물 받음
  compare(a, b) {
    // a가 b에게 준 개수 > b가 a에게 준 개수
    if ((this.nodes[a].gives[b] || 0) > (this.nodes[b].gives[a] || 0)) {
      return 1;
    }

    if ((this.nodes[a].gives[b] || 0) < (this.nodes[b].gives[a] || 0)) {
      return -1;
    }

    // 선물 지수 비교
    if (this.getIndex(a) > this.getIndex(b)) {
      return 1;
    }

    if (this.getIndex(a) < this.getIndex(b)) {
      return -1;
    }

    return 0;
  }
}

function solution(friends = [], gifts = []) {
  const graph = new Graph(friends);

  gifts.forEach(gift => {
    const [from, to] = gift.split(' ');
    graph.give(from, to);
  });

  // 받을 선물의 개수 저장
  const predicts = new Array(friends.length).fill(0);

  for (let i = 0; i < friends.length - 1; i += 1) {
    for (let j = i + 1; j < friends.length; j += 1) {
      const a = friends[i];
      const b = friends[j];
      const compare = graph.compare(a, b);

      if (compare > 0) {
        predicts[i] += 1;
      } else if (compare < 0) {
        predicts[j] += 1;
      }
    }
  }

  return Math.max(...predicts);
}

describe('가장 많이 받은 선물', () => {
  it('test1', () => {
    const friends = ['muzi', 'ryan', 'frodo', 'neo'];
    const gifts = [
      'muzi frodo',
      'muzi frodo',
      'ryan muzi',
      'ryan muzi',
      'ryan muzi',
      'frodo muzi',
      'frodo ryan',
      'neo muzi',
    ];

    expect(solution(friends, gifts)).toBe(2);
  });
});
