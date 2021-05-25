class MergSort {
  constructor(datalist) {
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

  sort(start, end) {

    if (start >= end) {
      return;
    }

    let m = start + parseInt((end-start) / 2);
    console.log(start + " " + end);
    this.sort(start, m);
    this.sort(m+1, end);
    this.merg(start, m, end);
    console.log(this.datalist);
  }

  merg(l, m, r) {

    let n1 = m - l + 1;
    let n2 = r - m;

    let L = new Array();
    let R = new Array();


    for (let i = 0; i < n1; i++)
      L[i] = this.datalist[l + i];

    for (let j = 0; j < n2; j++)
      R[j] = this.datalist[m + 1 + j];


    let i = 0;

    let j = 0;

    let k = l;
    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        this.datalist[k] = L[i];
        i++;
      } else {
        this.datalist[k] = R[j];
        j++;
      }
      k++;
    }
    while (i < n1) {
      this.datalist[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      this.datalist[k] = R[j];
      j++;
      k++;
    }
  }
}
