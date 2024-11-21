function tenTimes(number) {
  const result = number * 10;
  return result;
}

tenTimes(10);

function cutHalf(number) {
  const result = number / 2;
  return result;
}

const output = cutHalf(10);
console.log(output);

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const result = multiply / 2;
  return result;
}

console.log(doMath(10, 5));
