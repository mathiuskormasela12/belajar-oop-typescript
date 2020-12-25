"use strict";
// ===== Setter & Getter
class Mahasiswa2 {
    constructor(nama, usia) {
        this.nama = nama;
        this.usia = usia;
    }
    set setNama(nama) {
        this.nama = nama;
    }
    get getNama() {
        return this.nama;
    }
}
const mathius2 = new Mahasiswa2('Mathius', 18);
console.log(mathius2.getNama);
mathius2.setNama = 'Matthew';
console.log(mathius2.getNama);
