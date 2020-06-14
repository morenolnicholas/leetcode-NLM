/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let retVal = 0;
    let totalCount = 0;
    const arr = Array.from(s);
    arr.forEach(element =>{
        if(element == 'L'){
            retVal--;
        }else{
            retVal++;
        }
        
        if(retVal == 0){
            totalCount++;
        }
    });
    return totalCount;
};