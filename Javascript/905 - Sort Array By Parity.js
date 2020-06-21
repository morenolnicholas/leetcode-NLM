/**
Given an array A of non-negative integers,
return an array consisting of all the even elements of A,
followed by all the odd elements of A.
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    const even = A.filter(num => num % 2 == 0);
    const odd = A.filter(num => num % 2 != 0);
    return even.concat(odd);
};
