const obj = {
  a: 0,
  b: 1,
  c: 2
}

const { a, b, c } = obj

console.log(obj);
console.log(JSON.stringify(obj));
console.log(JSON.parse(JSON.stringify(obj)));