class QuickSort {
  i = 0;
  j = this.i + 1;
  low = 0;
  top = -1;
  stack = [];
  
  constructor(datalist) {
    
    this.datalist = datalist;
    this.high = datalist.length - 1;
    
    this.stack[++this.top] = this.low;  
    this.stack[++this.top] = this.high;
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
    if (this.top >= 0) {

      let h = this.stack[this.top--];
      let l = this.stack[this.top--];

      let p = this.partition(this.datalist, l, h)

      if (p -1 > 0) {
        this.stack[++this.top] = 0;
        this.stack[++this.top] = p-1;
      }

      if (p+1 < h) {
        this.stack[++this.top] = p+1;
        this.stack[++this.top] = h;
      }

    }

  }



  partition(data, low, high) {
    let pivot = data[high];
    this.j = low -1;
    for (let i = low; i < high; i++) {
      if (data[i].value < pivot.value) {
        this.j++;
        this.swap(i, this.j);
      }
    }

    this.swap(this.j+1, high);

    return this.j+1

  }

  swap(i, j) {
    let temp = this.datalist[i];
    this.datalist[i] = this.datalist[j];
    this.datalist[j] = temp;
  }
}