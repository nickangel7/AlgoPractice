class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (let s of strs) {
      res += s.length + '#' + s;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let res = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str[i]);
      i = j + 1;
      j = i + length;
      res.push(str.substring(i, j));
      i = j;
    }
    return res;
  }
}

//method - it's easy to encode but I need to have markers to say where to split the words apart - Length of words? I could salt the spaces between words
//also could use a hashmap

const sol = new Solution();
console.log(sol.encode(['neet', 'code', 'love', 'you']));
console.log(sol.decode('4#neet4#code4#love3#you'));
