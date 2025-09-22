



console.log("before intialisation the fun:");
console.log(add(2,3));
function add(a,b){
    return a+b;
}
console.log("after intialisation the fun:");
console.log(add(3,3));

// non hoisted fun --> arrow fun

// console.log("before intialisation the fun:");
// console.log(sub(2,3));
const sub =(a,b)=> a-b;
console.log("after  intialisation the fun:");
console.log(sub(2,3));





// temoral dead zone (TDZ) cant be accessed until intialisation
