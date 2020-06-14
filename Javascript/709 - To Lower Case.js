/**
 * implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    const arrStr = Array.from(str);
    let newStr = "";
    arrStr.forEach(element =>{
        if(element.charCodeAt() < 97 && element.charCodeAt() >= 65){
    newStr += String.fromCharCode(element.charCodeAt() + 32);
        } else{
            newStr += element;
        }
    });
    return newStr;
};