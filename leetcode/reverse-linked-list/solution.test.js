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

function ListNode(val, next) {
  this.val = val;
  this.next = next ?? null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function solution(head) {
  let node = null;
  let current = head;

  while (current) {
    const temp = current.next;
    current.next = node;
    node = current;
    current = temp;
  }

  return node;
}

describe('reverse-linked-list', () => {
  it('iteratively', () => {
    const arr = [1, 2, 3, 4, 5];
    let node = null;
    arr.forEach(it => {
      if (node === null) {
        node = new ListNode(it, null);
      } else {
        let current = node;
        while (current.next) {
          current = current.next;
        }

        current.next = new ListNode(it, null);
      }
    });

    let reversedNode = null;
    arr.reverse().forEach(it => {
      if (reversedNode === null) {
        reversedNode = new ListNode(it, null);
      } else {
        let current = reversedNode;
        while (current.next) {
          current = current.next;
        }

        current.next = new ListNode(it, null);
      }
    });

    expect(solution(node)).toEqual(reversedNode);
  });
});
