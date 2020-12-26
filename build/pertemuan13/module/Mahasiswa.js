"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Module;
(function (Module) {
    class Mahasiswa {
        constructor(nama) {
            this.nama = nama;
        }
        say() {
            console.log(`Hello my name is ${this.nama}`);
        }
    }
    Module.Mahasiswa = Mahasiswa;
})(Module || (Module = {}));
;
exports.default = Module;
