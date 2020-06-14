/**
 * Given an integer number n, 
 * return the difference between the product of its digits and the sum of its digits.
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    //Get the individual values separated and turned into array
    const nValue = Array.from(n.toString(), x => Number(x));
    var numSum = (accumulator, currentVal) => accumulator + currentVal;
    var numProduct = (accumulator, currentVal) => accumulator * currentVal;
    
    numProduct = (nValue.reduce(numProduct));
    numSum = (nValue.reduce(numSum));
    return numProduct - numSum ;
};