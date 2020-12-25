"use strict";
/*
  Static merupakan keyword dalam OOP
  yg berguna untuk dapat membuat sebuah
  method & property dapat di akses
  tanpa instiansiasi classnya.
*/
class Mahasiswa3 {
    constructor() {
        this.menikah = false;
    }
    static getNama() {
        console.log(this.nama);
    }
    sayHello() {
        console.log(`Halo nama saya ${Mahasiswa3.nama} berusia ${Mahasiswa3.usia} tahun`);
    }
    async show() {
        return 'Mathius';
    }
}
Mahasiswa3.nama = 'Mathius';
Mahasiswa3.usia = 18;
Mahasiswa3.getNama();
console.log(Mahasiswa3.nama);
const matt = new Mahasiswa3();
matt.sayHello();
