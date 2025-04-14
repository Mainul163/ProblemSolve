function bubbleShort(num) {
  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length - 1; j++) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
      }
    }
  }

  return num;
}

let numbers = [64, 34, 25, 12, 22, 11, 90];

const finalArray = bubbleShort(numbers);
console.log(finalArray);
