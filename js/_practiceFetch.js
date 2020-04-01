//use the following sourche to get images and display them through the dom
//source 'https://rickandmortyapi.com/api/character/'

const getApi = () => {
  fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(json => console.log(json.results))
    .catch(() => {
      console.log('error');
    });

};
// const getApi = () => {
//   fetch('https://rickandmortyapi.com/api/character/')
//     .then(()=> {
//       res => res.json()
//       .then(json => console.log(json.result))
//     }). catch(() => {
//       console.log('error')
//     })
// }

getApi();


//looping over properties in objects

// const obj = {
//   a: 'some',
//   b: 2,
//   c: false
// };

// console.log(Object.keys(obj));


