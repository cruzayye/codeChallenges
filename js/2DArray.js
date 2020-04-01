const twoDArr = [
  [1, 3, 4, 5, 6],
  [1, 3, 9, 5, 7],
  [1, 3, 4, 3, 8],
];

// for(let i = 0; i < twoDArr.length; i++) {
//   for(let k = 0; k < twoDArr[i].length; k++){
//     console.log(twoDArr[i][k]);
//   }
//   console.log('end of row');
// }

//OR
twoDArr.forEach((row)=> {
  row.forEach((col) => {
    console.log(col);
  });
  console.log('end of row');
});
