
// const fizzBuzz = (acc, ele )=> {
//   if (ele % 15 === 0) return `${acc} Fizz Buzz`;
//   if (ele % 5 ===0 ) return `${acc} Fizz`;
//   if (ele % 3 ===0 ) return `${acc} buzz`;
// }

function fizzBuzz(acc, ele) {
  if (ele % 15 === 0) return `${acc} Fizz Buzz`;
  if (ele % 5 ===0 ) return `${acc} Fizz`;
  if (ele % 3 ===0 ) return `${acc} buzz`;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(nums.reduce(fizzBuzz, ''))
