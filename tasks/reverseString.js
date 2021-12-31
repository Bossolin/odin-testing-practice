const reverseString = (string) => {
  const arr = string.trim().split("").reverse().join("");
  console.log(arr);
  return arr;
};

reverseString("hello");
export default reverseString;
