function getProps<T, U extends keyof T>(obj: T, props: U) {
  return obj[props];
}

const mhs = { nama: 'Mathius', usia: 18 };

console.log(getProps(mhs, 'nama'));
console.log(getProps(mhs, 'usia'));