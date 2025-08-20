const isPalindrome = (s) => {
  const isAlphanumeric = (index) => {
    if (index >= 'A' && index <= 'Z') return true;
    if (index >= 'a' && index <= 'z') return true;
    if (index >= '0' && index <= '9') return true;
    return false;
  };

  let t = 0;
  let z = s.length - 1;

  while (t < z) {
    while (t < z && !isAlphanumeric(s[t])) {
      t++;
    }
    while (z > t && !isAlphanumeric(s[z])) {
      z--;
    }
    if (s[t].toLowerCase() !== s[z].toLowerCase()) {
      return false;
    }
    t++;
    z--;
  }
  return true;
};

//method - need to distinguish alphanumeric
//then i need to have two pointers that go from the begging and from the end and check if it's a palindrome

console.log(isPalindrome('Was it a car or a cat I saw?'));
