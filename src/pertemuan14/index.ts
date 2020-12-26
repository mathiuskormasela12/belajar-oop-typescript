/* 
  ===== Perbedaan type & interface =====

  type 
  1. Bisa digunakan untuk beragam tipe data
  2. Tidak bisa melakukan inhertitance ke type lain
  3. Tidak bisa melakukan merge
  4. Untuk melakukan merge harus dilakukan dengan cara yg lain

  interface 
  1. Hanya bisa digunakan untuk tipe data object
  2. Bisa melakukan inherinatce ke interface lain
  3. Bisa melakukan merge
  4. Bisa di extends dengan class, untuk memperluan interfacenya

  Best practice :
  1. Hanya gunakan interface pada sebuah class
  2. Jangan gunakan type pada sebuah class
  3. Hanya gunakan type untuk membuat sebuah variable atau function
  4. Hanya gunakan interface pada object
*/

// type nama = string;
// type Mahasiswas = {
//   nama: string,
//   usia: number
// };

// interface Deno {
//   nama: string;
// }

// interface Deno {
//   usia: number;
// }

type Deno2 = {
  nama: string
}

type Deno3 = {
  age: number;
};

type Deno = Deno2 & Deno3;
type Denos = Deno2 | Deno3;