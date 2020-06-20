/**
**Given an integer n, return any array containing n unique
 integers such that they add up to 0.
 * @param {number} n
 * @return {number[]}
 THIS IS A VERY UGLY SOLUTION I AM GONNA REDUE IT IN THE
 NEXT FEW DAYS, COULD BE COMPLETED SHORTER.
 */

var sumZero = function(n) {
    var arr =[];
    var isNeg = 1;
    var testN = n;
    for(var index = 0; index < n; index++){
        if(index == 0 || index % 2 == 0){
            arr[index] = testN * 1;
        } else if (index % 2 != 0){
            arr[index] = testN * -1;
        }
        // if the n number of elements is odd
        if(index == n - 1 && n % 2 != 0){
            arr[index] = 0;
        }

        if(arr[index] <0){
            isNeg = 1;
            testN--;
        } else{
            isNeg = -1;
        }
    }

    return arr;
};
