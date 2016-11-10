const foo = 1;
const bar = '2';
console.log(foo + bar);
console.log(foo + Number(bar));
console.log(foo + +bar);

foo = 1;
bar = 0;
const baz = 2;

console.log(foo || bar); // 1, which is true
console.log(bar || foo); // 1, which is true
console.log(foo && bar); // 0, which is false
console.log(foo && baz); // 2, which is true
console.log(baz && foo); // 1, which is true