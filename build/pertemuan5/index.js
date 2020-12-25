"use strict";
/*
  Interface merupakan sebuah template
  untuk membuat class, namun semua property
  dan method hanya sebuah abstract property
  dan method.
*/
class Gamma {
    constructor(nama) {
        this.usia = 19;
        this.nama = nama;
    }
    bergerak() {
        console.log('lompat');
    }
}
const gamma = new Gamma('Mathius');
gamma.bergerak();
console.log(gamma.usia);
