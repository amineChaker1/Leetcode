var fizzBuzz = function (n) {
  let ansewer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      ansewer[i] = "FizzBuzz";
    } else if (i % 3 == 0) {
      ansewer[i] = "Fizz";
    } else if (i % 5 == 0) {
      ansewer[i] = "Buzz";
    } else {
      ansewer[i] = i.toString();
    }
  }
  ansewer.shift();
  return ansewer;
};
fizzBuzz(3);
