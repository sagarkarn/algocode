let datalist = null;
let insertionSort = null;
var start = false;
function data(value,rgb){
  this.value = value;
  this.rgb = rgb;
}


function getData(){
  
  datalist = []
  
  for(let i = 0; i < floor(innerWidth / 21); i++){
    let d = new data(
      floor(random(1,window.innerHeight)),
      [
        floor(random(100,255)),
        floor(random(100,255)),
        floor(random(100,255))
      ]
    );
    datalist.push(d);
  }
  insertionSort = new InsertionSort(datalist);
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  getData();
  
  
}

function draw(){
  background(51);
  stroke(255)
  fill(100);
  insertionSort.display();
  if(mouseIsPressed){
    start = true;
  }
  if(start){
    insertionSort.sort();
  }
  
}