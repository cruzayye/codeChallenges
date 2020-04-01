// GETS SINGLE IMAGE  
  // getQuote = () => {
  //   return fetch('https://yesno.wtf/api')
  //     .then(res => res.json())
  //     .then(res => {
  //       const image = res.image;   
  //       const ele = document.getElementById('fetch');
  //       const img = new Image()
  //       img.src = image;
  //       ele.appendChild(img);
  //     })

  // };

  // getQuote();



//GETS MULTIPLE TITLES
const getTitles = () => {
  return fetch('https://www.reddit.com/r/mysubreddit.json')
    .then(res => res.json())
    .then(res => {
      const children = res.data.children;
      // return children.map(title => console.log(title.data.title))
      return children.map(title => {
        const redTitle = title.data.title;
        const section = document.getElementById('fetch');
        const h2 = document.createElement('h2');
        h2.innerHTML = redTitle
        section.appendChild(h2);
        
      })
    })
}


getTitles()


    
  
  
  
  
  
  
  //  const myData = fetch('https://yesno.wtf/api')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     console.log(JSON.stringify(myJson));
  //   });






    // var myImage = getQuote()

    // console.log(getQuote())

    // console.log(getQuote())
    // const myClass = {
    //   data: getQuote()
    // }

    
    






// getImg();




//this can be used when posting. 
// const newPost = post => {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(post),
//     headers: new Headers({
//       'content-Type': 'application/json'
//     })
//   }

//   return fetch('lingtoapi', opitons)
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .then(error => console.error('Error: ${error}'))
// }



export default createNote =  note => {
  return fetch(`${process.env.API_URL}/notes`, {
    method: 'POST',
    body: JSON.stringify(note)
  })
    .then(res => [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
