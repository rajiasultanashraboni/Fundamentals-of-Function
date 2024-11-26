function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  const sub = num1 - num2;
  return sub;
}
function multiply(num1, num2) {
  const mult = num1 * num2;
  return mult;
}

function divide(num1, num2) {
  const div = num1 / num2;
  return div;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    const result = add(a, b);
    return result;
  }
  if (operation === "subtract") {
    const result = subtract(a, b);
    return result;
  }
  if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
  }
  if (operation === "divide") {
    const result = divide(a, b);
    return result;
  }
}

console.log(calculator(45, 2, "add"));
console.log(calculator(45, 2, "subtract"));
console.log(calculator(45, 2, "divide"));
console.log(calculator(45, 2, "multiply"));
