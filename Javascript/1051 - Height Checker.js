/**
Students are asked to stand in non-decreasing order of heights for an annual photo.
Return the minimum number of students that must move in order for all students to be standing
in non-decreasing order of height.
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    var counter = 0;
   const sortHeights = [];
    heights.forEach( element => sortHeights.push(element));
    sortHeights.sort((a,b) => a -b);
    heights.forEach((element, index) =>{
       if(element != sortHeights[index]){
           counter++;
       }
    });
    return counter;
};
