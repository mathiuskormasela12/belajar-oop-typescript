// Belajar Generic Constraints

interface IShowData {
  length: number;
}

function showData2<T extends IShowData>(value: T): T {
  console.log(value.length);
  return value;
}

showData2('Mathius');
showData2({ length: 20, value: 10 });