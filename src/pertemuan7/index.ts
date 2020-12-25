// Belajar extends interface dengan class

class Content {
  public nama: string = 'Mathius';
  public usia: number = 20;

  public sayHello(): void {
    console.log(`Halo nama saya ${this.nama} berusia ${this.usia} tahun`);
  }
}

interface Contents extends Content {
  menikah: boolean;
}

// semua property dan method pada class Content harus dibuat juga di class AnakBaik
class AnakBaik implements Contents {
  public nama: string = 'Matt';
  public usia: number = 20;
  public menikah: boolean = false;

  public sayHello(): void {
    console.log(`Halo nama saya ${this.nama} berusia ${this.usia} tahun`);
  }
}

const wk = new AnakBaik();
console.log(wk)
wk.sayHello();