// set up an onclick event that removes the div when clicked.

function setup() {
  console.log('img clicked');
}

const thisFunc = () => {
  const img = document.getElementsByClassName('image');
  for(let i = 0; i < img.length; i++) {
    let thisImg = img[i];
    console.log(thisImg);
    thisImg.addEventListener('onclick', setup());
  }

};

thisFunc();

// Example case. 
document.body.innerHTML = `
<div class="image">
  <img src="https://goo.gl/kjzfbE" alt="First">
  <button class="remove">X</button>
</div>
<div class="image">
  <img src="https://goo.gl/d2JncW" alt="Second">
  <button class="remove">X</button>
</div>`;


document.getElementsByClassName('remove')[0].click();




const doSome = (e) => {
  if(e.target !== e.currentTarget){
    console.log(e.target.id)
  }
}

const parent = document.querySelector('#parent');
parent.addEventListener('click', doSome);
