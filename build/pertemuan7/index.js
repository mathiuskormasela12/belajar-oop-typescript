"use strict";
// Belajar extends interface dengan class
class Content {
    constructor() {
        this.nama = 'Mathius';
        this.usia = 20;
    }
    sayHello() {
        console.log(`Halo nama saya ${this.nama} berusia ${this.usia} tahun`);
    }
}
// semua property dan method pada class Content harus dibuat juga di class AnakBaik
class AnakBaik {
    constructor() {
        this.nama = 'Matt';
        this.usia = 20;
        this.menikah = false;
    }
    sayHello() {
        console.log(`Halo nama saya ${this.nama} berusia ${this.usia} tahun`);
    }
}
const wk = new AnakBaik();
console.log(wk);
wk.sayHello();
