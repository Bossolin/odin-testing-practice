const calculator = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) return null;
    return a / b;
  };

  return { add, subtract, multiply, divide };
})();

export default calculator;
