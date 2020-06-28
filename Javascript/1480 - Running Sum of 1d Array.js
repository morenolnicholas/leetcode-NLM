/**
Given an array nums. We define a running sum
of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.forEach((element, index)=>{
       if(index ==0) return;
        nums[index] = nums[index] + nums[--index];
    });
    return nums;
};
