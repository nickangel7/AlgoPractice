class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    while (l < r) {
      if (numbers[l] + numbers[r] < target) l++;
      if (numbers[l] + numbers[r] > target) r--;
      if (numbers[l] + numbers[r] == target) return [numbers[l], numbers[r]];
    }
    return 'invalid array';
  }
}

//Use two Markers to adjust where to find the two that add up
//Start with markers at the start and the end of the array, if the sum is bigger adjust the end marker to left one, if it's smaller, adjust the beginning up.

const sol = new Solution();
console.log(sol.twoSum([1, 2, 3, 4], 3));
