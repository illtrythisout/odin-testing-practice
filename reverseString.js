export { reverseString };

function reverseString(string) {
  let reversedArr = [];

  for (let i = string.length; i >= 0; i--) {
    reversedArr.push(string.charAt(i));
  }

  return reversedArr.join('');
}
