/**
 * 이해
 *
 * 주어지는 것
 *
 * 구해야하는 것
 *
 * 조건
 *
 * 계획
 *
 * 반성
 */

class ListNode {
  constructor(val, next) {
    this.val = val;
    this.next = next ?? null;
  }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let current = head;
  const visited = [];

  while (current) {
    if (visited.includes(current)) {
      return true;
    }

    visited.push(current);
    current = current.next;
  }

  return false;
}

describe('linked-list-cycle', () => {
  it('test', () => {
    // [3,2,0,-4]
    const node = new ListNode(3);
    let current = node;

    // node.next = new ListNode(2);
    // node.next.next = new ListNode(0);
    // node.next.next.next = new ListNode(-4);
    // node.next.next.next.next = node.next;

    [2, 0, -4].forEach(it => {
      current.next = new ListNode(it);
      current = current.next;
    });

    // pos = 1, loop 생성
    current.next = node.next;

    expect(hasCycle(node)).toBe(true);
  });
});
