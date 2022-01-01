const caesarCipher = (string, num) => {
  if (!string) return "";
  const stringArr = string.split("");
  const cipherShift = num > 26 ? num % 26 : num || 5;
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const shiftedArr = stringArr.map((letter) => {
    if (!letter.match(/[a-z]/gi)) return letter;
    const currentLetter = letter.toLowerCase();
    const index = alphabet.indexOf(currentLetter);

    const shiftedLetter =
      index + cipherShift < 26
        ? alphabet[index + cipherShift]
        : alphabet[index + cipherShift - 26];

    return currentLetter === letter
      ? shiftedLetter
      : shiftedLetter.toUpperCase();
  });

  return shiftedArr.join("");
};

console.log(caesarCipher("Lorem Ipsum, Dolor Sit Amet."));
export default caesarCipher;
