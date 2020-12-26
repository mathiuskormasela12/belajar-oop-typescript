"use strict";
// Belajar namespace
// namespace MyNamespace{
//   export class Hewan {
//     public show(): void {
//       console.log('hello namespace');
//     }
//   }
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const inu = new MyNamespace.Hewan();
// inu.show()
const Mahasiswa_1 = __importDefault(require("./module/Mahasiswa"));
const data_1 = __importDefault(require("./module/data"));
const machi = new Mahasiswa_1.default.Mahasiswa('Mathius');
machi.say();
console.log(data_1.default);
