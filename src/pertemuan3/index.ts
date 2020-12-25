/* 
  Static merupakan keyword dalam OOP
  yg berguna untuk dapat membuat sebuah
  method & property dapat di akses
  tanpa instiansiasi classnya.
*/

class Mahasiswa3 {
  public static nama: string = 'Mathius';
  private static usia: number = 18;
  private menikah: boolean = false;

  public static getNama(): void {
    console.log(this.nama);
  }

  public sayHello(): void {
    console.log(`Halo nama saya ${Mahasiswa3.nama} berusia ${Mahasiswa3.usia} tahun`);
  }

  public async show(): Promise<string> {
    return 'Mathius';
  }
}

Mahasiswa3.getNama();
console.log(Mahasiswa3.nama);

const matt = new Mahasiswa3();
matt.sayHello();