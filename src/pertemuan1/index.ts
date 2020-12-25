class Mahasiswa {
  // readonly merupakan keyword untuk menguabah sebuah property menjadi constanta property
  public readonly nama: string;
  protected usia: number;
  private data: string = 'Ini data';

  constructor(nama: string, usia: number) {
    this.nama = nama;
    this.usia = usia;
  }

  public sayHello(): void {
    console.log(`Hello my name is ${this.nama}`);
  }
}

class Mathius extends Mahasiswa {
  private skills: string[];

  constructor(nama: string, usia: number, ...skills: string[]) {
    super(nama, usia);
    this.skills = [...skills];
  }

  public sayHello(): void {
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
  constructor(public nama: string, public kaki: number) {}
}

const kodok = new Hewan('Kodok', 4);
console.log(kodok);

