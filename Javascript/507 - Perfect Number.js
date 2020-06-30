/**
We define the Perfect Number is a positive integer that is equal
 to the sum of all its positive divisors except itself.
 Now, given an integer n, write a function that returns true
 when it is a perfect number and false when it is not. 
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let total =0;
    if(num <=1) return false;
    for(let index = 0; index < num; index++){
        if(num % index == 0){
            total = total + index;
        }
    }
    return total == num;
};
