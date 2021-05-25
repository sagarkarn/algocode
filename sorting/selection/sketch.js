var selectionSort = null;
var start = false;
var datalist = null;
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
  selectionSort = new SelectionSort(datalist);
}


function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  getData();
  selectionSort.sort(0,datalist.length - 1);
}

function draw(){
  background(51);
  selectionSort.display();
  if(mouseIsPressed){
    start = true;
  }
  if(start){
    selectionSort.sort();
  }
  
}