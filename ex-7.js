function isPalindrome(string) {
  // Start coding here
  let wordReverse = "";
  for (let i = 0; i < string.length; i++) {
    wordReverse = string[i] + wordReverse;
  }
  console.log(wordReverse);
  if (wordReverse === string) {
    return true;
  } else {
    return false;
  }
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
