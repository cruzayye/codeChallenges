const { simpleSum }  = require('../js/simpleSum');
const { simpleMultiply } = require('../js/simpleMultiply');
const compareArr  = require('../js/compareArr');
const palindrome = require('../js/palindrome');
const anagram = require('../js/anagram');
const vowels = require('../js/vowels');
const pairFinder = require('../js/pairFinder');
const upArray = require('../js/upArray');
const countMonkeys = require('../js/countMonkeys');
const removeDups = require('../js/removeDups');
const leftRotation = require('../js/leftRotation');
const countPosSumNeg = require('../js/countPosSumNeg');
const sumMixedArr = require('../js/sumMixedArr');
const sum2Ten = require('../js/sum2Ten');
const sum = require('../js/sum');
const emailCheck = require('../js/emailCheck');


describe('implmementations of test', () => {
  it('returns sum of array', () => {
    var arr = [1, 2, 4];
    const result = simpleSum(arr);
    expect(result).toBe(7);
  });

  it('returns product of array', () => {
    const product = simpleMultiply(5, 2);
    expect(product).toEqual(10);
  });

  it('compares the index value of 2 arrays and returns 2 scores', () => {
    let arr1 = [5, 6, 71];
    let arr2 = [3, 7, 10];
    const compareResult = compareArr(arr1, arr2);
    expect(compareResult).toEqual([2, 1]);
  });
  it('verifies that the string reads the same left to right and reversed', () => {
    let str = 'civic';
    const palindromeResult = palindrome(str);
    expect(palindromeResult).toBe(true);
  });
  it('verifies that the two words contain same length and letters', () => {
    let str1 = 'friend';
    let str2 = 'finder';
    const anagramResult = anagram(str1, str2);
    expect(anagramResult).toBe(true);
  });
  it('returns the number of vowels within the string', () => {
    let vowelStr = 'i ace u';
    const vowelResult = vowels(vowelStr);
    expect(vowelResult).toBe(4);
  });
  it('count up how many pairs in an array', () => {
    let arrOfPairs = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3, 5, 16, 38, 65, 70, 60, 11];

    const pairFinderResult = pairFinder(arrOfPairs);
    expect(pairFinderResult).toBe(4);
  });
  it('it takes an array and returns a new array with an added value of 1', () => {
    let arrayToUp = [1, .9];
    const upArrayResult = upArray(arrayToUp);
    expect(upArrayResult).toBe(null);
  });
  it('takes a number and turns it into an array that counts up to that number', () => {
    let count = 3;
    const countMonkeyResult = countMonkeys(count);
    expect(countMonkeyResult).toEqual([1, 2, 3]);
  });
  it('removes duplicate wors', () => {
    let words = 'hello hello bruh bruh';
    const removeDupsResult = removeDups(words);
    expect(removeDupsResult).toEqual('hello bruh');
  });
  it('it splits and shifts array to the left based on input', () => {
    let arr2Shift = [1, 2, 3, 4, 5, 6];
    let shiftNum = 3;
    const leftRotationResult = leftRotation(arr2Shift, shiftNum);
    expect(leftRotationResult).toEqual([4, 5, 6, 1, 2, 3]);
  });
  it('Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. If the input array is empty or null, return an empty array.', () => {
    let countPosSumNegArr = [1, 2, 3, -1, -3];
    const countPosSumNegResult = countPosSumNeg(countPosSumNegArr);
    expect(countPosSumNegResult).toEqual([3, -4]);
  });
  it('Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return result as a number', () => {
    let mixedArr = [9, 3, '7', '3'];
    const sumMixedArrResult = sumMixedArr(mixedArr);
    expect(sumMixedArrResult).toEqual(22);
  });
  it('Given an array of numbers, find all the possible solutions that eqaul 10 using 2 numbers', () => {
    let sumArr = [1, 3, 4, 5, 6, 7];
    const sum2TenResult = sum2Ten(sumArr);
    expect(sum2TenResult).toEqual([[3, 7], [4, 6]]);
  });
  it.only('without used the * operator return the sum of the two numbers', () => {
    let num1 = 5;
    let num2 = 5;
    const sumResult = sum(num1, num2);
    expect(sumResult).toEqual(25);
  });
  it('validates whether string is an email or not', () => {
    let email = 'johnnyc010302@gmail.com';
    let checkEmailResult = emailCheck(email);
    expect(checkEmailResult).toBe(true);
  });
});
