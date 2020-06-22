/**
Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
You may return any answer array that satisfies this condition.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    var arr =[];
    var even = A.filter(num => num % 2 == 0);
    var odd =  A.filter(num => num % 2 != 0);
    for(var index = 0; index < even.length; index++){
        arr.push(even[index], odd[index]);
    }
    return arr;
};
