// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function convert(celcius) {
  //   console.log(celcius);
  const Fahrenheit = celcius * 1.8 + 32;
  return Fahrenheit;
}

const result = convert(100);
console.log(result);
