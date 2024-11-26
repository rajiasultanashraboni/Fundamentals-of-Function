const heights2 = [167, 190, 120, 165, 137];

function lowestNumberFind(numbers) {
  const lowestNumber = Math.min(...numbers);
  return lowestNumber;
}

const result = lowestNumberFind(heights2);
console.log(result);
