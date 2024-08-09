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
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) {
    return null;
  }

  let head = null;
  let tail = head;

  while (list1 && list2) {
    const node = new ListNode();

    if (list1.val <= list2.val) {
      node.val = list1.val;
      list1 = list1.next;
    } else {
      node.val = list2.val;
      list2 = list2.next;
    }

    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  }

  while (list1) {
    const node = new ListNode(list1.val);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }

    list1 = list1.next;
  }

  while (list2) {
    const node = new ListNode(list2.val);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }

    list2 = list2.next;
  }

  return head;
}

function createList(nums = []) {
  let head = null;
  let tail = null;

  nums.forEach(num => {
    const node = new ListNode(num);
    if (head === null) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      tail = tail.next;
    }
  });

  return head;
}

describe('merge-two-sorted-lists', () => {
  it('test', () => {
    const list1 = createList([1, 2, 4]);
    const list2 = createList([1, 3, 4]);
    const expected = createList([1, 1, 2, 3, 4, 4]);

    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});
