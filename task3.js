// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum = sum + number;
  }
  //   console.log("sum of numbers", sum);
  const avg = sum / numbers.length;
  return avg;
}

const array = [2, 4, 6, 8, 10];
const result = make_avg(array);
console.log(result);
