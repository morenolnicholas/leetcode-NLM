/**
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
const result = (currentNum) => nums.filter(num => num <currentNum);
const countedNums = [];
    for(var i = 0; i < nums.length; i++){
        countedNums[i] = result(nums[i]).length;
    }
    return countedNums;
};
