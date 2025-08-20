const isValid = (s) => {
  const stack = [];
  const parenthesisCheck = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (parenthesisCheck[s[i]]) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] === parenthesisCheck[s[i]]
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};

console.log(isValid('([{}])'));

//need to have an object that checks if the parenthesis are matching and closed
