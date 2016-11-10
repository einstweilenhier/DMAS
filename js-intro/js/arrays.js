const foo = [];

foo.push('a');
foo.push('b');

console.log(foo[0]); // => a
console.log(foo[1]); // => b

console.log(foo.length); // => 2

foo.pop();

console.log(foo[0]); // a
console.log(foo[1]); // undefined

console.log(foo.length); // 1

foo.unshift('z');

console.log(foo[0]); // z
console.log(foo[1]); // a

console.log(foo.length); // 2