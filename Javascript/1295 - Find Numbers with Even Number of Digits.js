/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {

    const arr = nums.toString().split(',').filter(num => num.length % 2 == 0);
    return arr.length;
    };