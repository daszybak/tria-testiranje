const sum = require('./sum');

const array1 = ['1', 'five', '2wenty', 'thr33']; //result = 36
const array2 = [
  ['1X2', 't3n'],
  ['1024', '5', '64'],
]; //result = 1099
const array3 = [[['1'], '10v3'], ['738h'], [['s0'], ['1mu4ch3'], '-1s0']]; //result = 759
const array4 = [[], [], []];
const array5 = [];
const array6 = ['--6--7', [[['13-1']]]];
const array7 = [[68], '67', [60, '55']];
const array8 = ['❤️', '-001', 1];
const array9 = {};

test('sum of numbers in array ["1", "five", "2wenty", "thr33"] to equal 36', () => {
  expect(sum(array1)).toBe(36);
});

test('sum of numbers in array [["1X2", "t3n"],["1024", "5", "64"]] to equal 1099', () => {
  expect(sum(array2)).toBe(1099);
});

test('sum of numbers in array [[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]] to equal 759', () => {
  expect(sum(array3)).toBe(759);
});

test('sum of numbers in array [[],[],[]] to equal 0', () => {
  expect(sum(array4)).toBe(0);
});

test('sum of numbers in array [] to equal 0', () => {
  expect(sum(array5)).toBe(0);
});

test('sum of numbers in array ["--6--7", [[["13-1"]]]] to equal -1', () => {
  expect(sum(array6)).toBe(-1);
});

test('sum of numbers in array [[68], "67", [60, "55"]] to equal 122', () => {
  expect(sum(array7)).toBe(122);
});

test('sum of numbers in array ["❤️", "1", 1] to equal 1', () => {
  expect(sum(array8)).toBe(1);
});

test('sum of numbers in array {} to throw Error "The input is not an array"', () => {
  expect(() => {
    sum(array9);
  }).toThrow();
});
