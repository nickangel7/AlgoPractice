class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let indexI = nums[i];
    let indexJ = nums[j];
    while (i < j && indexJ) {
      if (indexI + indexJ == target) {
        return [i, j];
      } else if (indexI + indexJ < target) {
        i++;
      } else {
        j--;
      }
    }
    return 'target not found';
  }
}

//method - do a for loop in which the i param is searching at the same time as the j.  If the indices are
//to large for the target then increment, if to small then decrement the j. search for each i index.

const sol = new Solution();
console.log(sol.twoSum([2, 3], 7));
