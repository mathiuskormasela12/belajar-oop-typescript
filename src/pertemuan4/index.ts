/* 
  Abstract Class merupakan sebuah 
  class yang akan menjadi template
  dari sebuah class dan Abstract Class
  ini tidak dapat di inisialisasi.
*/

abstract class Mahasiwa4 {
  public nama: string;
  public abstract usia: number;

  constructor(nama: string) {
    this.nama = nama;
  }
  
  public abstract getNama(): string;
}

class Matthew extends Mahasiwa4 {
  public usia: number = 19;
  
  public getNama(): string {
    return this.nama;
  }
}

const matthew2 = new Matthew('Matt');
console.log(matthew2.getNama());