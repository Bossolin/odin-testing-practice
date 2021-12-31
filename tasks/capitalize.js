const capitalize = (string) => {
  if (!string) return "";
  const arr = string.trim().toLowerCase().split("");
  const upper = arr[0].toUpperCase();
  arr.splice(0, 1, upper);
  const cap = arr.join("");
  return cap;
};

capitalize("hello");
export default capitalize;
