
const c1 = {
  x: 2,
  y: 4
}

var c1Funk = coordinates.bind(c1)


function coordinates() {
  console.log(this)
  // console.log(`${this.x}`)
}


//**without the bind method this refers to the window obj */
Object.m = 1;
function noBind() {
  // console.log(this)
  console.log(this.m)
}

noBind();
c1Funk();



