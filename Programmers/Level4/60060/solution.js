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
      this.root.count += 1;
      let currentNode = this.root;
      const wordLength = word.length;

      for (let i = 0; i < wordLength; i += 1) {
        const char = word[i];

        if (currentNode.childNodes[char]) {
          currentNode = currentNode.childNodes[char];
        } else {
          currentNode.childNodes[char] = new Node(char, 0);
          currentNode = currentNode.childNodes[char];
        }

        currentNode.count += 1;
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
  function solution(words, queries) {
    const queriesLength = queries.length;
    const answer = [];

    const trieArray = new Array(10001);

    // Trie 세팅
    words.forEach(word => {
      const indexByLength = word.length;

      if (!Array.isArray(trieArray[indexByLength])) {
        trieArray[indexByLength] = [];
        trieArray[indexByLength].push(new Trie(), new Trie());
      }

      const reversedWord = word.split('').reverse().join('');
      trieArray[indexByLength][0].insert(word);
      trieArray[indexByLength][1].insert(reversedWord);
    });

    // 정답 추출
    for (let i = 0; i < queriesLength; i += 1) {
      const query = queries[i];
      const queryLength = query.length;
      const useReverse = query.charAt(0) === '?';
      let count = 0;
      const newQuery = query.replace(/\?/g, '');

      const trie = trieArray[queryLength];

      if (trie) {
        if (useReverse) {
          count = trie[1].search(newQuery.split('').reverse().join(''));
        } else {
          count = trie[0].search(newQuery);
        }
      }

      answer[i] = count;
    }

    return answer;
  }

  console.log(solution(words, queries));
})();
