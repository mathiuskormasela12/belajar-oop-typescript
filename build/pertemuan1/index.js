"use strict";
class Mahasiswa {
    constructor(nama, usia) {
        this.data = 'Ini data';
        this.nama = nama;
        this.usia = usia;
    }
    sayHello() {
        console.log(`Hello my name is ${this.nama}`);
    }
}
class Mathius extends Mahasiswa {
    constructor(nama, usia, ...skills) {
        super(nama, usia);
        this.skills = [...skills];
    }
    sayHello() {
        super.sayHello();
        console.log('This Child Class');
    }
}
const mathius = new Mathius('Mathius', 19, 'Node Js', 'PHP', 'Ruby');
console.log(mathius);
mathius.sayHello();
// mathius.nama = 'Matthew';
// console.log(mathius)
console.log('====================');
class Hewan {
    /* untuk membuat property kita bisa
       langsung penulisnya pada parameter
       dari constructor dan nilainya akan
       otomatis terisi, karena ketika kita
       mengirim parameter di constructor,
       maka typescript akan langsung mengubah
       parameter itu menjadi property bukan
       lagi parameter
    */
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const kodok = new Hewan('Kodok', 4);
console.log(kodok);
