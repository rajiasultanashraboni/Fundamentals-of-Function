function offAverage(numbers) {
  let odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      //   console.log(number);
      odds.push(number);
    }
  }
  //   console.log(odds);
  let sum = 0;
  for (const number of odds) {
    // console.log(number);
    sum = sum + number;
  }
  const length = odds.length;
  const average = sum / length;
  //   console.log(length);
  return average;
}

const numbers = [2, 5, 7, 9, 5, 8, 10, 11];
const avg = offAverage(numbers);
console.log(avg);
