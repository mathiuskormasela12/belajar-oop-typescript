// ===== Setter & Getter

class Mahasiswa2 {
  private nama: string;
  private usia: number;

  constructor(nama: string, usia: number) {
    this.nama = nama;
    this.usia = usia;
  }

  public set setNama(nama: string) {
    this.nama = nama;
  }

  public get getNama(): string {
    return this.nama;
  }
}

const mathius2 = new Mahasiswa2('Mathius', 18);
console.log(mathius2.getNama);
mathius2.setNama = 'Matthew';
console.log(mathius2.getNama);