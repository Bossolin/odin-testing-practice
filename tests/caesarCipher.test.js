import caesarCipher from "../tasks/caesarCipher";

test("shift 5: abcde = fghij", () => {
  expect(caesarCipher("abcde")).toBe("fghij");
});

test("roll over: vwxyz = abcde", () => {
  expect(caesarCipher("vwxyz")).toBe("abcde");
});

test("upperCase: AbCdE = FgHiJ ", () => {
  expect(caesarCipher("AbCdE")).toBe("FgHiJ");
});

test("non letter: Lorem. = Qtwjr. ", () => {
  expect(caesarCipher("Lorem.")).toBe("Qtwjr.");
});

test(" = ", () => {
  expect(caesarCipher("")).toBe("");
});
