const dateToFormat = '12/31/2014';

const formatDate = (date) => {
  let arr = date.split('');
  let year  = arr.slice(-4);
  let month = arr.slice(0, 2);  
  let day = arr.slice(3, 5);
  let monthDay = month.concat(day);
  let result = year.concat(monthDay).join('');
  console.log(result);

};

formatDate(dateToFormat);















// let arr = date.split('');
// let month = arr.slice(0, 2);
// let day = arr.slice(3, 5);
// let year = arr.slice(-4);
// let monthDay = month.concat(day);
// console.log(year.concat(monthDay).join(''));
