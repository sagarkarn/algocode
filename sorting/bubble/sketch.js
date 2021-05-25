let data = []
let bubbleSort = null;
var start = false;
var i = 0;
var j = 0;


function getData(){
  data = [];
  colors = [];
  for(let i = 0; i < floor(innerWidth / 21); i++){
    data.push(floor(random(1,window.innerHeight)))
    colors.push([random(100,255),random(100,255),random(100,255)])
  }
  bubbleSort = new BubbleSort(data,colors);
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  getData();
}

function draw(){
  background(51);
  stroke(255);
  fill(100);
  bubbleSort.display();
  
 if(mouseIsPressed){
   start = true;
 } 
 if(start){
  bubbleSort.swap();
 }
  
  
}