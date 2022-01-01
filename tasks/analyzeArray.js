const analyzeArray = (arr) => {
  if (!arr) return null;
  const { length } = arr;

  const min = Math.min(...arr);

  const max = arr.reduce((maxVal, curr) => (maxVal < curr ? curr : maxVal));

  const average = arr.reduce((a, b) => a + b) / arr.length;

  return { length, min, max, average };
};

const object = analyzeArray([1, 8, 3, 4, 2, 6]);
console.log(object);

export default analyzeArray;
