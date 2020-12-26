namespace Module {
  export class Mahasiswa {
    private nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }

    public say(): void {
      console.log(`Hello my name is ${this.nama}`);
    }
  }
};

export default Module;