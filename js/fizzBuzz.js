const num = 15;
const fizzBuzz = (num) => {
  for(var i = 0; i <= num; i++){
    if(i % 3 === 0){
      console.log(i, 'fizz');
    } else if(i % 5 === 0){
      console.log(i, 'buzz');
    } else console.log(i, 'fizzbuzz');
  }

};

fizzBuzz(num);

// module.exports = fizzBuzz;
