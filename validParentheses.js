// first but flood
var isValid = function (s) {
  let res = [];

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];
    if (curr == "(" && next == ")") {
      res.push(true);
    } else if (curr == "{" && next == "}") {
      res.push(true);
    } else if (curr == "[" && next == "]") {
      res.push(true);
    } else {
      res.push(false);
    }
    i++;
  }
  for (let j = 0; j < res.length; j++) {
    if (res[j] == false) {
      return false;
    } else {
      return true;
    }
  }
};
isValid("({[]{}");

// second and it passes
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (c !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};
