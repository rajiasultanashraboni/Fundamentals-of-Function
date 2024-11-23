heights = [78, 25, 64, 56, 55, 68, 63];

function getMax(heights) {
  let max = heights[0];
  for (const height of heights) {
    // console.log(height);
    if (height > max) {
      max = height;
    }
  }
  return max;
}

const result = getMax(heights);
console.log(result);
