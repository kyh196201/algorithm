(function () {
  class Node {
    constructor(character = '', count = 0) {
      this.count = count;
      this.character = character;
      this.childNodes = {};
      //   this.isEnd = false;
    }
  }

  class Trie {
    constructor() {
      this.root = new Node();
    }

    insert(word) {
      let currentNode = this.root;
      const wordLength = word.length;

      for (let i = 0; i < wordLength; i += 1) {
        const char = word[i];
        currentNode.count += 1;

        if (currentNode.childNodes[char]) {
          currentNode = currentNode.childNodes[char];
        } else {
          currentNode.childNodes[char] = new Node(char, 1);
          currentNode = currentNode.childNodes[char];
        }
      }
    }

    search(query) {
      if (!query) {
        return this.root.count;
      }

      let currentNode = this.root;
      const queryLength = query.length;

      for (let i = 0; i < queryLength; i += 1) {
        const char = query[i];

        if (!currentNode.childNodes[char]) {
          return 0;
        }

        currentNode = currentNode.childNodes[char];
      }

      return currentNode.count;
    }
  }

  const words = ['frodo', 'front', 'frost', 'frozen', 'frame', 'kakao'];
  const queries = ['fro??', '????o', 'fr???', 'fro???', 'pro?'];

  //  예상 정답: [3, 2, 4, 1, 0]
})();
