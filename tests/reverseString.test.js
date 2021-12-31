import reverseString from "../tasks/reverseString";

test("hello = olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("' hello ' = olleh", () => {
  expect(reverseString(" hello ")).toBe("olleh");
});

test("how are you? = ?uoy era woh", () => {
  expect(reverseString("how are you?")).toBe("?uoy era woh");
});
