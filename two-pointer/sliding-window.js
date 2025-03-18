// ******** brute force **********************************


let array=[3, 1, 2, 7, 4, 2, 1, 1, 5]
let sum=0
let maxSum=0;
let k=3
for(let i=0;i<array.length;i++){
    for(let j=i;j<i+k;j++){
         sum+=array[j];
        
        }
        if(sum>maxSum){
            maxSum=sum
        }
        sum=0;
       
    }

console.log(maxSum,"maxsum")

// maxSum=Math.max(sum,maxSum)
// console.log(maxSum,"maxsum")

//****************  Maximum Sum Subarray of size K **************************


function maxSubarraySum(nums, K) {
    let sum = 0, maxSum = 0;

    // Compute the first window sum
    for (let i = 0; i < K; i++) {
        sum += nums[i];
    }
    maxSum = sum;

    // Slide the window across the array
    for (let i = K; i < nums.length; i++) {
        sum += nums[i] - nums[i - K]; // Remove leftmost element, add new one
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

// 🔥 Test Cases
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3))