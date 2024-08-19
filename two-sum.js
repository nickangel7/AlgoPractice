/*
  Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 6 ,8, 9, 1, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number
*/

const twoSum = (arr, target) => {
  arr.sort((a,b) => a - b);
  let l = 0
  let r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return true
    }
    console.log(arr)
    console.log(l)
    console.log(r)
  }
  return false;


}

console.log(twoSum([2, 4 ,8, 9, 1, 11, 15],7))


//strategy - use the two pointer method to find the appropriate true or false boolean value.
//while l is < the r marker
//if the sum is too big - need to move the r marker to the left
//if the sum is too small - need to move the l marker to the right.
//if the pointers cross without finding a sum - then there needs to return false