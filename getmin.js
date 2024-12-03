const prices = [10000, 20000, 50000, 35000, 56000, 70000];
let min = prices[0];
function getMin(numbers) {
  //   console.log(numbers);
  for (const number of numbers) {
    // console.log(number);
    if (number < min) {
      min = number;
    }
  }
  return min;
}

const cheap = getMin(prices);
console.log(cheap);
