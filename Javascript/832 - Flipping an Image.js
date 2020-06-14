/**
 * Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
 * To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].
 * To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
    A.forEach(arr=> arr.reverse().forEach((element,index) =>{
        if(element == 0){
            arr[index] = 1;
        } else{
            arr[index] = 0;
        }
    }));
    return A;
}