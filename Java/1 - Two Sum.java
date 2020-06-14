/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] twoSum = new int[2];
        int solution = 0;
        for(int i = 0; i < nums.length; i++){
            for(int j = 1; j < nums.length; j++){
                solution = nums[i] + nums[j];
                
                if(solution == target && i != j){
                    twoSum[0] = i;
                    twoSum[1] = j;
                }
            }           
        }
        return twoSum;
    }
}