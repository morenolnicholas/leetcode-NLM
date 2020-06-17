/**
Write a function that reverses a string. The input string is given as an array of characters char[].
Do not allocate extra space for another array, you must do this
by modifying the input array in-place with O(1) extra memory.
You may assume all the characters consist of printable ascii characters.
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let c = "";
    var midPoint = Math.ceil((s.length /2));
    for(var index = 0; index < midPoint; index++){
        c = s[s.length - (1 + index)];
        s[s.length - (1 + index)] = s[index];
        s[index] = c;
    }
};
