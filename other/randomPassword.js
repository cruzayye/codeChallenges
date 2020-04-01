const passwordParts = [
  {
    part: ['a', 'b', 'c', 'd', 'e', 'f']
  },
  {
    part: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    part: ['A', 'B', 'C', 'D', 'E', 'F']
  },
  {
    part: ['!', '@', '#', '$', '%', '^', '&', '*']
  },
];

//for each key only bring back 4 values that are random
const pParts = {
  uppercase: ['a', 'b', 'c', 'd', 'e', 'f'],
  lowercase: ['A', 'B', 'C', 'D', 'E', 'F'],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  characters: ['!', '@', '#', '$', '%', '^', '&', '*']
};

const randomizer = () => {
  let rows = Object.values(pParts);
  console.log(rows);
  //TODO: because we get an array of arrays look up how to to an inner arry Global search game of life
};
randomizer();

// const randomPassword = (pParts) => {
//   let result = [];
//   pParts.forEach(ele => {

//     const arrays = ele.part;
//     console.log(arrays);
//   });
//   // console.log(result);
// };

// randomPassword(passwordParts);
