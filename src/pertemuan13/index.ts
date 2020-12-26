// Belajar namespace
// namespace MyNamespace{
//   export class Hewan {
//     public show(): void {
//       console.log('hello namespace');
//     }
//   }
// }

// const inu = new MyNamespace.Hewan();
// inu.show()

import Module from './module/Mahasiswa';
import age from './module/data';

const machi = new Module.Mahasiswa('Mathius');
machi.say();
console.log(age)

