// belajar inheritance ke sesama interface

interface Humans {
  nama: string;
  usia: number;
}

interface Student extends Humans {
  kelas: string;
  jurusan: string;
}

class IND implements Student {
  public nama: string;
  public usia: number;
  public kelas: string;
  public jurusan: string;

  constructor(nama: string, usia: number, kelas: string, jurusan: string) {
    this.nama = nama;
    this.usia = usia;
    this.kelas = kelas;
    this.jurusan = jurusan;
  }

  public getNama(): void {
    console.log(`Halo nama saya ${this.nama} kelas ${this.kelas}`);
  }
}

const ind = new IND('Mathius', 18, 'XII', 'RPL');
ind.getNama();