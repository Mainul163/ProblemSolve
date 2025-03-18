// Example 1: Finding a Pair with a Given Sum

// Problem: Given a sorted array and a target sum, find if there exist two numbers whose sum equals the target.

function twoPointerSum(aray,target){

let i=0; let j=aray.length-1

while(i<j){
   let sum=aray[i]+aray[j];

   if(sum===target){

    return true
   }else if(sum<target){
     i++
   }else{
    j--
   }
}

return false
}




let aray=[1, 2, 3, 4, 6, 8, 9]
let target=10;
const sumArray=twoPointerSum(aray,target) 
console.log(sumArray)