// Write a function that takes an array of strings of arbitrary dimensionality ([], [][], [][][], etc.)
// and returns the sum of every separate number in each string in the array.
// - Numbers in strings can be negative, but will all be base-10 integers. - Negative numbers may directly follow another number.
// - The hyphen or minus character (“-”) does not only occur in numbers. - Arrays may be ragged or empty.
// Example
// sum([“1", “five”, “2wenty”, “thr33”]) ➞ 36
// sum([[“1X2", “t3n”],[“1024", “5”, “64"]]) ➞ 1099
// sum([[[“1”], “10v3"], [“738h”], [[“s0"], [“1mu4ch3”],“-1s0"]]) ➞ 759
// --
// --

function sum(array) {
  if (!Array.isArray(array)) {
    throw new Error('The input is not an array');
  }
  if (array.length === 0) return 0;

  return sumHelper(array);
}

function sumHelper(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += sumHelper(array[i]);
    }
    //check if primitive or instance of a String class
    else if (typeof array[i] === 'string' || array[i] instanceof String) {
      sum += stringSumHelper(array[i]);
    }
  }

  return sum;
}

function stringSumHelper(s) {
  let sum = 0;
  let chars = [...s];

  let currentNumber = 0;
  let positiveNumber = true;
  let exponent = 0;
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '-') {
      positiveNumber = false;
    } else if (chars[i] >= '0' && chars[i] <= '9') {
      let number = parseInt(chars[i]);
      if (!positiveNumber) {
        number *= -1;
        positiveNumber = true;
      }
      //leading zeros
      if (number === 0 && exponent === 0) {
        continue;
      }

      currentNumber = currentNumber * 10 + number;
      exponent++;
    }
    if (chars[i] < '0' || chars[i] > '9' || i === chars.length - 1) {
      sum += currentNumber;
      console.log('sum', sum);
      currentNumber = 0;
      exponent = 0;
    }
  }

  return sum;
}

module.exports = sum;
