//without used the + operator return the sum of the two numbers

const sum = (num1, num2) => {
  let counter = 0;
  for(var i = 1; i <= num2; i ++){
    counter += num1;
  }
  return counter;

};

module.exports = sum;




