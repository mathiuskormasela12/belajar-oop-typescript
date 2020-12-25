"use strict";
/*
  Abstract Class merupakan sebuah
  class yang akan menjadi template
  dari sebuah class dan Abstract Class
  ini tidak dapat di inisialisasi.
*/
class Mahasiwa4 {
    constructor(nama) {
        this.nama = nama;
    }
}
class Matthew extends Mahasiwa4 {
    constructor() {
        super(...arguments);
        this.usia = 19;
    }
    getNama() {
        return this.nama;
    }
}
const matthew2 = new Matthew('Matt');
console.log(matthew2.getNama());
