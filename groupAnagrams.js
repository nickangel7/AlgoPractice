class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    //Checking if anagram
    const isAnagram = (str1, str2) => {
      const sorted1 = str1.split('').sort().join();
      const sorted2 = str2.split('').sort().join();
      if (sorted1 === sorted2) {
        return true;
      } else {
        return false;
      }
    };

    //iterating over the array, checking and pushing to new nested Array
    //make a new array to push to the indices of strs.

    const result = [];
    for (let i = 0; i < strs.length; i++) {
      let j = i + 1;
      const indexArray = [];
      indexArray.push(strs[i]);
      while (strs[j]) {
        if (isAnagram(strs[i], strs[j])) indexArray.push(strs[j]);
        j++;
      }
      result.push(indexArray);
    }
    return result;
  }
}

//method - 1. I need to find all the anagrams by comparing them. I will use a helper function
//to find if they are anagrams.
//iterate over the

const sol = new Solution();
console.log(sol.groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']));

// const isAnagram = (i, j) => {
//       const sortedI = i.split('').sort().join();
//       const sortedJ = j.split('').sort().join();
//       if (sortedI === sortedJ) {
//         return true;
//       } else {
//         return false;
//       }
//     };

//     console.log(isAnagram('cat','tac'));
