import capitalize from "../tasks/capitalize";

test("hello to be Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("bOb to be Bob", () => {
  expect(capitalize("bOb")).toBe("Bob");
});

test("how are you? to be How are you?", () => {
  expect(capitalize("how are you?")).toBe("How are you?");
});

test("GREAT to be Great", () => {
  expect(capitalize("GREAT")).toBe("Great");
});

test("' test ' = 'Test'", () => {
  expect(capitalize(" test ")).toBe("Test");
});

test("'' = ''", () => {
  expect(capitalize("")).toBe("");
});
