class SelectionSort{
  constructor(datalist){
    this.datalist = datalist;
    this.i = 0;
    this.j = this.i + 1;
    this.min = this.i;
  }
  
  display() {
    background(51);
    let x = 5;
    for (let i = 0; i < datalist.length; i++) {
      stroke(255);
      let color = datalist[i].rgb;
      fill(color[0], color[1], color[2]);
      rect(x, 0, 15, datalist[i].value);
      x += 20;
    }
  }
  
  sort(){
    if( this.i < this.datalist.length -1){
      
      if ( this.j < this.datalist.length){
        if(this.datalist[this.j].value < this.datalist[this.min].value){
          this.min = this.j;
        }
        this.j++;
      }
      else{
        let temp = this.datalist[this.i];
        this.datalist[this.i] = this.datalist[this.min];
        this.datalist[this.min] = temp;
        this.i++;
        this.j = this.i + 1;
        this.min = this.i;
      }
    }
  }
}