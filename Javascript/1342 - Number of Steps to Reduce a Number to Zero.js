/**
 * Given a non-negative integer num, return the number of steps to reduce it to zero.
 *  If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * @param {number} num
 * @return {number}
 */
var steps = 0;

var numberOfSteps = function(num) {
    if(num != 0){
        if(num % 2 != 0){
            steps++;
            num  = num -1;
        } 
        num = num / 2;
        steps++;
        numberOfSteps(num);
        }
     else{
    return steps;
    }
};