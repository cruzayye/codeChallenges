//Array.from - takes the array from nums
//new Set only brings back unique values
const nums = [1, 1, 2, 3, 2, 3, 5, 6, 7, 8]

const newNums = Array.from(new Set(nums));

console.log(newNums);