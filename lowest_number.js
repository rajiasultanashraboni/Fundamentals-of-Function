// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];

function lowestNumberFind(numbers) {
  //   console.log(numbers);
  let lowestNumber = numbers[0];
  for (const number of numbers) {
    // console.log(number);
    if (number < lowestNumber) {
      lowestNumber = number;
    }
  }
  return lowestNumber;
}
const result = lowestNumberFind(heights2);
console.log(result);
