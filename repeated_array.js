// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeatedArray(numbers, find) {
  let count = 0;
  for (const number of numbers) {
    // console.log(number);

    if (number === find) {
      count++;
    }
  }
  return count;
}
numbers = [5, 6, 11, 12, 98, 5];
const find = 25;
const result = repeatedArray(numbers, find);
console.log(result);
