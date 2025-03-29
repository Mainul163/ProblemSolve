// ******* Maximum of all subarrays of size k **************

function maxNumber(array, k) {
  let sum = 0;
  let maximum = 0;
  for (let i = 0; i < k; i++) {
    sum += array[i];
  }
  maximum = sum;

  for (let i = k; i < array.length; i++) {
    sum += array[i] - array[i - k];
    if (maximum < sum) {
      maximum = sum;
    }
  }

  return maximum;
}

const array = [1, 3, -1, -3, 5, 3, 6, 7];

console.log(maxNumber(array, 3));
