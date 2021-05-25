class InsertionSort {

  constructor(datalist) {
    this.datalist = datalist;
    this.i = 1;
    this.j = 0;
    this.key = null;
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
  sort() {
    if (this.i < this.datalist.length) {
      if (this.key == null) {
        this.key = this.datalist[this.i];
        
      }

      if (this.j >= 0 && this.key.value < this.datalist[this.j].value) {
        console.log(this.datalist);
        this.datalist[this.j+1] = this.datalist[this.j];
        this.j--;

      } else {
        console.log('called in else condition 1');
        this.i++;
        this.j = this.i -1;
        this.key = this.datalist[this.i];
      }
      this.datalist[this.j+1] = this.key;
    }


  }
}