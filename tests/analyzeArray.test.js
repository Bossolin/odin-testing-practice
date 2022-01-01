import analyzeArray from "../tasks/analyzeArray";

test(".length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    length: 6,
    min: 1,
    max: 8,
    average: 4,
  });
});
