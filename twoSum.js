/*Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first*/ 


 const twoSum = (nums, target) => {
    const prevMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (prevMap.has(diff)) {
            return [prevMap.get(diff), i];
        }

        prevMap.set(nums[i], i);
    }
    return [];
}

console.log (twoSum([3,4,5,6], 7)); 


//solution 
//Use two markers s and t, s will iterate from the start, t will iterate from the end of nums
//check if the target is met and iterate toward eachother
//when the target is found, return the coordinates