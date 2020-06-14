/**
Given an array of integers A sorted in non-decreasing order,
return an array of the squares of each number,
also in sorted non-decreasing order.
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  //Multiply every number by itself, then sort them by ascending order
   return A.map(x => x * x).sort((a,b) => a-b);
};
