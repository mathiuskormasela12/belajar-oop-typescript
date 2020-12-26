"use strict";
function getProps(obj, props) {
    return obj[props];
}
const mhs = { nama: 'Mathius', usia: 18 };
console.log(getProps(mhs, 'nama'));
console.log(getProps(mhs, 'usia'));
