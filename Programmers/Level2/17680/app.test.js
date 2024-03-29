// Ref: https://blo9.xyz/2020/08/10/Coding/Algorithm/JavaScript1/lru_cache/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRU {
  constructor(v) {
    this.size = v;
    this.map = new Map();
    this.head = new Node(null);
    this.tail = new Node(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  put(value) {
    const node = new Node(value);
    this.map.set(value, node);
    this.insertFront(node);

    if (this.size < this.map.size) {
      this.removeLast();
    }
  }

  get(value) {
    if (!this.map.has(value)) return -1;

    const node = this.map.get(value);
    this.breakAndLink(node);
    this.insertFront(node);
    return node.value;
  }

  // eslint-disable-next-line class-methods-use-this
  breakAndLink(node) {
    const p = node.prev;
    const n = node.next;
    p.next = n;
    n.prev = p;
    node.next = null;
    node.prev = null;
  }

  insertFront(node) {
    const h2 = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    h2.prev = node;
    node.next = h2;
  }

  removeLast() {
    // remove from linklist
    const node = this.tail.prev;
    this.breakAndLink(node);
    // remove from map
    this.map.delete(node.value);
  }
}

const MISS = 5;
const HIT = 1;

function solution(cacheSize = 0, cities = []) {
  if (!cacheSize) {
    return MISS * cities.length;
  }

  cities = cities.map(city => city.toLowerCase());

  let runTime = 0;

  const cache = new LRU(cacheSize);

  cities.forEach(city => {
    const cachedValue = cache.get(city);

    if (cachedValue !== -1) {
      runTime += HIT;
      return;
    }

    runTime += MISS;
    cache.put(city);
  });

  return runTime;
}

function solution2(cacheSize = 0, cities = []) {
  if (!cacheSize) {
    return MISS * cities.length;
  }

  let runTime = 0;

  const cache = [];

  cities.forEach(city => {
    const capitalizedCity = city.toUpperCase();

    const index = cache.indexOf(capitalizedCity);

    // miss
    if (index < 0) {
      runTime += MISS;

      // 도시 추가
      const size = cache.unshift(capitalizedCity);

      // 크기가 초과되었을 경우
      if (size > cacheSize) {
        cache.pop();
      }

      return;
    }

    // hit
    runTime += HIT;
    // 기존 위치에서 제거
    cache.splice(index, 1);
    // 제일 앞에 추가
    cache.unshift(capitalizedCity);
  });

  return runTime;
}

describe('캐시', () => {
  it('test', () => {
    const cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];

    expect(solution(0, cities)).toBe(25);

    const cities2 = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];
    expect(solution(2, cities2)).toBe(16);

    expect(solution2(0, cities)).toBe(25);
    expect(solution2(2, cities2)).toBe(16);
  });
});
