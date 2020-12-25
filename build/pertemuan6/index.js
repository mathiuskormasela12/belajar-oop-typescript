"use strict";
// belajar inheritance ke sesama interface
class IND {
    constructor(nama, usia, kelas, jurusan) {
        this.nama = nama;
        this.usia = usia;
        this.kelas = kelas;
        this.jurusan = jurusan;
    }
    getNama() {
        console.log(`Halo nama saya ${this.nama} kelas ${this.kelas}`);
    }
}
const ind = new IND('Mathius', 18, 'XII', 'RPL');
ind.getNama();
