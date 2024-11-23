const biriyaniKhor = [
  "babul",
  "kabul",
  "cabul",
  "labul",
  "babul",
  "kabul",
  "mokbul",
  "cabul",
];
const numbers = [2, 4, 6, 8, 10, 12, 2, 4, 5, 6, 2, 4];

function noDuplicate(array) {
  //   console.log(array);
  const unique = [];
  for (const item of array) {
    // console.log(item);
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biriyaniKhor);
const uniqueNumbers = noDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueNumbers);
