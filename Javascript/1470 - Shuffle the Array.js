/**
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var ret = [];
    const arrX = nums.slice(0,n);
    const arrY = nums.slice(n,nums.length);

    arrX.forEach((element, index) => {
                ret[index * 2] = element;
                ret[index * 2 +1] = arrY[index];
                }
                );
return ret;
};
