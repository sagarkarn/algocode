class BubbleSort{
  constructor(data,colors){
    this.colors = colors;
    this.data = data;
    this.x = 5;
    this.i = 0;
    this.j = 0;
    console.log(data);
  }
  
  display(){
    let x = 5;
    background(51);
    for(let i = 0; i < this.data.length; i++){
      
      stroke(255);
      let color = this.colors[i];
      fill(color[0],color[1],color[2]);
      rect(x, 0, 15, this.data[i]);
      x += 20;
    }
  }
  swap(){
    if(this.i < data.length){
      if(this.j < data.length - 1){
        if(this.data[this.i] < this.data[this.j]){
          let temp = this.data[this.i];
          this.data[this.i] = this.data[this.j];
          this.data[this.j] = temp;
          
          temp = this.colors[this.i];
          this.colors[this.i] = this.colors[this.j];
          this.colors[this.j] = temp;
          
        }
        this.j++; 
        
      }
      else{
          this.i++;
          this.j = 0;
        }
    }
  }
}