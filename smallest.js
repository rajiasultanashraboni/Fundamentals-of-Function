heights = [78, 25, 64, 56, 55, 68, 63];

function getMin(heights) {
  let min = heights[0];
  for (const height of heights) {
    // console.log(height);
    if (height < min) {
      min = height;
    }
  }
  return min;
}

const result = getMin(heights);
console.log(result);
