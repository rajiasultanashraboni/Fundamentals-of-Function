// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function conditional(number) {
  if (number % 2 === 1) {
    const result = number * 2;
    return result;
  } else if (number % 2 === 0) {
    const result = number / 2;
    return result;
  }
}

// console.log(conditional(102));

function oddEven(number) {
  if (number % 2 === 1) {
    const result = number * 2;
    return result;
  } else {
    return number / 2;
  }
}

console.log(oddEven(105));
