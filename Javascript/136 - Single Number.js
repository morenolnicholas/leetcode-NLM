/**
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let set = new Set();
   while(nums.length !=0){
       let element = nums.pop();
       if(set.has(element) == true){
          set.delete(element);
    } else{
        set.add(element);
    }
   }
var setIter = set.values();
return setIter.next().value;
};
