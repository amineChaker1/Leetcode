var plusOne = function (digits) {
  if (digits[0] == 9 && digits[1] == undefined) {
    digits.unshift(1);
    digits[1] = 0;
  }

  for (let i = 1; i < digits.length; i++) {
    if (digits[i] == 9) {
      digits[i] = 0;
      digits[i - 1] = digits[i - 1] + 1;
    }
  }

  return digits;
};
plusOne([4, 9, 2, 1]);

var plusOne = function (digits) {
  let str = digits.join("");
  let num = BigInt(str) + BigInt(1);

  num = num
    .toString()
    .split("")
    .map((num) => parseInt(num));
  return num;
};
// digits[digits.length - 1] = digits[digits.length - 1] + 1;
