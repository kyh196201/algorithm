class ItemNode {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

class LRU {
  constructor(cacheSize = 0) {
    this.cacheSize = cacheSize;
    this.head = new ItemNode(null);
    this.tail = new ItemNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.datas = new Map();
  }

  has(key) {
    return this.datas.has(key);
  }

  hit(key) {
    const data = this.datas.get(key);

    let node = this.head.next;

    while (node.data) {
      if (node.data === key) {
        break;
      }

      node = node.next;
    }

    this.deleteNode(node);
    this.addFront(key);

    return data;
  }

  addFront(key) {
    const node = new ItemNode(key);

    this.datas.set(key, key);

    node.next = this.head.next;
    this.head.next.prev = node;
    node.prev = this.head;
    this.head.next = node;

    return this;
  }

  deleteNode(node) {
    const {prev, data, next} = node;

    prev.next = next;
    next.prev = prev;

    this.datas.delete(data);

    return this;
  }

  deleteLastNode() {
    const lastNode = this.tail.prev;

    this.deleteNode(lastNode);

    return this;
  }

  miss(key) {
    this.addFront(key);

    if (this.cacheSize < this.datas.size) {
      this.deleteLastNode();
    }

    return null;
  }

  access(key) {
    if (this.has(key)) {
      return this.hit(key);
    }

    return this.miss(key);
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
    const cachedValue = cache.access(city);

    if (cachedValue !== null) {
      runTime += HIT;
      return;
    }

    runTime += MISS;
  });

  return runTime;
}

describe('캐시', () => {
  it('test', () => {
    const cities = ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'];

    expect(solution(0, cities)).toBe(25);

    const cities2 = ['Jeju', 'Pangyo', 'NewYork', 'newyork'];
    expect(solution(2, cities2)).toBe(16);
  });
});
