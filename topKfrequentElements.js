class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const cache = {};

    //populate the cache
    for (let i = 0; i < nums.length; i++) {
      if (cache[nums[i]]) cache[nums[i]]++;
      if (!cache[nums[i]]) cache[nums[i]] = 1;
    }

    const arr = Object.entries(cache).map(([num, freq]) => [
      freq,
      parseInt(num),
    ]);
    arr.sort((a, b) => b[0] - a[0]);

    //
    return arr.slice(0, k).map((pair) => pair[1]);
  }
}

//method - iterate over the array and count the occurance of each element, keeping track of the occurance of each
//only need to

const sol = new Solution();
console.log(sol.topKFrequent((nums = [1, 2, 2, 3, 3, 3]), (k = 2)));
