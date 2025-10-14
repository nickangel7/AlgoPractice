class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {

    //Checking if anagram
    const isAnagram = (str1, str2) => {
      const sorted1 = str1.split('').sort().join();
      const sorted2 = str2.split('').sort().joint();
      if (sorted1 === sorted2) {
        return true;
      } else {
        return false;
      }
    };

    //iterating over the array, checking and pushing to new nested Array
    let j = i + 1;
    for (let i = 0; i < strs.length; i++) {
        if (isAnagram(strs[i],strs[j])) strs[i] 
    }
    

  }
}

//method - 1. I need to find all the anagrams by comparing them. I will use a helper function
//to find if they are anagrams.
//iterate over the 

const sol = new Solution();

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