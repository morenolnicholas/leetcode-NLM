/**
Given two arrays of integers nums and index. Your task is to create target array under the following rules:

    Initially target array is empty.
    From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
    Repeat the previous step until there are no elements to read in nums and index.

    Return the target array.

    It is guaranteed that the insertion operations will be valid.
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr =[];
    nums.forEach((element, pos) =>{
        if(pos != index[pos]){
            arr.splice(index[pos],0,element);
        } else{
            arr[pos] = element;
        }
    });
    return arr;
};
