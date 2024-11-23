// Task-3:
// Write a function to count the number of vowels in a string.

function countVowels(inputString) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (const char of inputString) {
    // console.log(char);
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const result = countVowels("Programming is fun");
console.log(result);
