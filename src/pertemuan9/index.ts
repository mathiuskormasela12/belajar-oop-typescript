// function getData<T>(value: T): T {
//   return value;
// }

// console.log(getData<string>('Mathius').length);

// type Generic<T> = T;

// interface Generic<T> {
//   value: T;
// }

// function getData<T>(value: T): Generic<T> {
//   return {
//     value
//   };
// }

// console.log(getData('Mathius').value.length);

// interface IMahasiswa<T> {
//   name: T;
// }

// class ClassMahasiswa<T> implements IMahasiswa<T> {
//   public name: T;

//   constructor(nama: T) {
//     this.name = nama;
//   }
// }

// const m = new ClassMahasiswa<string | number>(1);
// console.log(m.name);

class Satu {
  public nama: string = 'Matthew';
}

class Dua {
  public obj: Satu;

  constructor(obj: Satu) {
    this.obj = obj;
  }
}

const satu = new Satu();
const dua = new Dua(satu);
console.log(dua.obj.nama);