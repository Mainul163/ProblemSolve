function binarySearch(arr, target) {
  const left = 0;
  const right = arr.length - 1;

  while (left <= right) {
    const mid = (left + right) / 2;

    if (arr[mid] === target) {
      return mid;
    } else if (mid < target) {
      left = mid + 1; /* target boro hoile mid theke right e jabe*/
    } else {
      right = mid - 1; /* target boro hoile mid theke left e jabe*/
    }
  }

  return -1;
}

const numbers = [1, 3, 5, 7, 9, 11, 13];
const index = binarySearch(numbers, 7);
console.log(index);

// time complexity  O(log n) reset test
