export { analyzeArray };

function analyzeArray(arr) {
  return {
    average:
      arr.reduce((total, n) => {
        return total + n;
      }) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}
