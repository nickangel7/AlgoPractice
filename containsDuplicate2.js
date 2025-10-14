class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newSet = new Set(nums);
        if(nums.length !== newSet.size) return true;
        return false;
    }
}

const sol = new Solution();
console.log(sol.hasDuplicate([1,2,3,3]));
console.log(sol.hasDuplicate([1,2,3]));


