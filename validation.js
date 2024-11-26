function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a valid number";
  }
  const mult = num1 * num2;
  return mult;
}

const result = multiply(10, 7);
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "pease provide a first string";
  } else if (second !== "string") {
    return " please provide a second string";
  }
  const full = first + " " + second;
  return full;
}

const result2 = fullName("10", 20);
// console.log(result2);

function getPrice(products) {
  //   console.log(products);
  if (typeof products !== "object") {
    return "please provide a object";
  }
  const price = products.price;
  return price;
}
const result3 = getPrice({ name: "chiruni", price: 35 });
// const result3 = getPrice(10);
console.log(result3);
