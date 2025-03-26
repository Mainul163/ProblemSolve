// Example 2: Removing Duplicates (Same Direction)
// Problem: Remove duplicate numbers in a sorted array in-place.



function removeDuplicateArray(nums){

 if(nums.length === 0){
    return 0;
 }

 let uniquePosition =0;
 let first=1


 while (first<nums.length){
 
  if(nums[first] !== nums[uniquePosition ]){

    uniquePosition ++

    nums[uniquePosition]=nums[first]

  }


   first ++
 }

 return uniquePosition +1

}



const nums = [1, 1, 2, 2, 3, 4, 5, 5, 5];
const newLength = removeDuplicateArray(nums);
console.log(nums)
console.log(newLength)
const findUniqueArray=nums.slice(0,newLength)
console.log(findUniqueArray)