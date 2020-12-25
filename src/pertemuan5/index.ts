/* 
  Interface merupakan sebuah template
  untuk membuat class, namun semua property
  dan method hanya sebuah abstract property
  dan method.
*/

interface Hewans {
  nama: string;
  // readonly untuk membuat constanta property
  // usia? membuat property usia menjadi optional property (property yg gw wajib di buat/implementasi di classnya)
  readonly usia?: number;
  bergerak(): void;
}

class Gamma implements Hewans {
  public nama: string;
  public readonly usia: number = 19;

  constructor(nama: string) {
    this.nama = nama;
  }

  public bergerak(): void {
    console.log('lompat');
  }
}

const gamma = new Gamma('Mathius');
gamma.bergerak();
console.log(gamma.usia);