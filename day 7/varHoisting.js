// hoisting of var a
console.log(a);
var a;
a=34;
console.log(a);

// not hoisted variable
console.log(b);
let b;
b = 67;
console.log(b);