function make2DArray(cols, rows){
  let arr = new Array(cols);
  for(let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 10;
let rows 
let resolution = 40;

function setup() {
  createCanvas(400, 400);
  grid = make2DArray(cols, rows);
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      grid[x][y] = randomNum(2);
    }
  }
}

function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function draw() {
  background(0);
  for(let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){

    }
  }
}

setup();

