//Given an integer array nums, returnm true is any value appears more than once in the array , otherwise return false.
//use a Set datatype to solve

const containsDuplicate = (nums) => {
  const newSet = new Set(nums);
  if (newSet.size == nums.length) return false;
  return true;
};

console.log(containsDuplicate([1, 2, 3, 4, 5]));
console.log(containsDuplicate([1, 2, 3, 4, 4]));
