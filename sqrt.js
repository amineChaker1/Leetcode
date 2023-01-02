var mySqrt = function (x) {
  let s = x ** 0.5;
  let out = s.toString();
  let end = 0;
  let res = "";
  if (x == 0) {
    return 0;
  }
  for (let i = 0; i < out.length; i++) {
    if (out[i] == ".") {
      end = i;
    } else {
      end = out.length;
    }
  }
  for (let j = 0; j < end; j++) {
    res += out[j];
  }
  return parseInt(res);
};
