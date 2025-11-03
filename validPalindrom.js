class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isAlphanumeric(char) {
    return (
      (char >= 'a' && char <= 'z') ||
      (char >= 'A' && char <= 'Z') ||
      (char >= '0' && char <= '9')
    );
  }

  isPalindrome(s) {
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
      //test alphanumeric
      if (!this.isAlphanumeric(s[i])) i++;
      if (!this.isAlphanumeric(s[j])) j--;
      //test if the same
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;
      console.log(s[i].toLowerCase(), s[j].toLowerCase());
      i++;
      j--;
    }
    return true;
  }
}

//Use two pointers to iterate over the string , beginning to end, end to beginning
//Any characters outside of the range of the upper a = 97, z = 122, A = 65, A = 90, 0 = 48, 9 = 57, 48-57, 65-90, 97-122

const sol = new Solution();
const string = 'azAZ9';
console.log(string.charCodeAt(5));
console.log(sol.isPalindrome('Was it a car or a cat I saw?'));
console.log(sol.isPalindrome('This is not a palindrome'));
