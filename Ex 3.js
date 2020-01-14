
// Given a number. Write a function that calculates its sum of the digits and if that sum has more than 1 digit find the sum of digits of that number. Repeat that process if needed and return the result.


function sumDigits(n) {
  return (n - 1) % 9 + 1;
}
console.log(sumDigits(99999999))