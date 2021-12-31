const reverseString = (string) => {
  if (!string) return "";
  const arr = string.trim().split("").reverse().join("");
  console.log(arr);
  return arr;
};

reverseString("hello");
export default reverseString;
