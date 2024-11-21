function sumOfNumbers(numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    // console.log(number);
    sum = sum + number;
  }
  return sum;
}
const numbs = [1, 2, 3, 4, 5];
const sum = sumOfNumbers(numbs);

console.log("sum of numbers", sum);
