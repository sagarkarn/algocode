var quickSort = null;
var start = false;
function Data(value,rgb){
  this.value = value;
  this.rgb = rgb;
}


function getData(){
  
  datalist = [];
  
  for(let i = 0; i < innerWidth / 20; i++){
    let d = new Data(
      floor(random(1,window.innerHeight)),
      [
        floor(random(100,255)),
        floor(random(100,255)),
        floor(random(100,255))
      ]
    );
    datalist.push(d);
  }
  
  quickSort = new QuickSort(datalist);
  console.log(datalist);
  
}


function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  getData();
  
}

function draw(){
  background(51);
  quickSort.display();
  if(mouseIsPressed){
    start = true;
  }
  if(start){
    quickSort.sort();
  }
  
}