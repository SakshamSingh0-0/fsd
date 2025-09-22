sum(1,2,3,4,6,8,9,0,89,41,16)
// rest parameter
const sum = (...args)=>{
    let output = 0;
    args.forEach((element) => {
        output+=element;
    })
    return output;

}
let output = sum(1,2,3,4,6,8,9,0,89,41,16);
console.log(output);