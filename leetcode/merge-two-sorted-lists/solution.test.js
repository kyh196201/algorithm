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
  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  let head = null;
  let tail = null;

  // head, tail의 초기값 설정
  if (list1.val <= list2.val) {
    head = list1;
    tail = head;
    list1 = list1.next;
  } else {
    head = list2;
    tail = head;
    list2 = list2.next;
  }

  // list1, list2 둘 다 있을 경우 각 노드 중에 더 작은 노드를
  // 새로운 리스트에 노드를 연결한다
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      // tail은 마지막 노드를 가리킨다
      tail = tail.next;
      list1 = list1.next;
    } else {
      tail.next = list2;
      tail = tail.next;
      list2 = list2.next;
    }
  }

  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
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
  describe('solution 1', () => {
    it('test1', () => {
      const list1 = createList([1, 2, 4]);
      const list2 = createList([1, 3, 4]);
      const expected = createList([1, 1, 2, 3, 4, 4]);

      expect(mergeTwoLists(list1, list2)).toEqual(expected);
    });

    it('test2', () => {
      expect(mergeTwoLists(null, null)).toEqual(null);
    });

    it('test3', () => {
      expect(mergeTwoLists(null, createList([0]))).toEqual(createList([0]));
    });

    it('test4', () => {
      expect(mergeTwoLists(createList([0, 1]), null)).toEqual(
        createList([0, 1]),
      );
    });
  });
});
