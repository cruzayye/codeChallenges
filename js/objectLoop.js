var myObject = { 'a': 1, 'b': 2, 'c': 3 };

//we can return an array of the 1.keys 2.entries 3.values
console.log(Object.entries(myObject).map(([key, value]) => {
  return(`${key}${value * 2}`)
}));

// Object.keys(myObject).map(function(key) {
//   myObject[key] *= 2;
// });

// console.log(myObject);
