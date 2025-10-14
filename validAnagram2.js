class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    const sortedS = s.split('').sort().join();
    const sortedT = t.split('').sort().join();
    console.log(sortedS);
    if (sortedS == sortedT) return true;
    return false;
  }
}

//method - alphebetize the string and then compare them

const sol = new Solution();
console.log(sol.isAnagram('racecar', 'carrace'));
