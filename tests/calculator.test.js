import calculator from "../tasks/calculator";

test("2+2 = 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("2-4 = -2", () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test("2*2 = 4", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("2/2 = 1", () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test("2/0 = null", () => {
  expect(calculator.divide(2, 0)).toBe(null);
});
