// let array=[3, 1, 2, 7, 4, 2, 1, 1, 5]


// for(let i=0;i<array.length;i++){

//     console.log(array[i],"array one")

//     for(let j=i;j<i+3;j++){

//         console.log(array[j],"array two")
//     }
// }





function maxSubarraySum(nums, K) {
    let sum = 0, maxSum = 0;

    // Compute the first window sum
    for (let i = 0; i < K; i++) {
        sum += nums[i];
    }
    maxSum = sum;

    // Slide the window across the array
    for (let i = K; i < nums.length; i++) {
        console.log(nums[i],nums[i-K] )
        sum += nums[i] - nums[i - K]; // Remove leftmost element, add new one
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

// 🔥 Test Cases
console.log(maxSubarraySum([2, 1, 5, 1, 3, 2], 3))