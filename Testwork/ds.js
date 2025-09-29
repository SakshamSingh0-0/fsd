// console.log("hello world");

// console.log(a);
// let a=12;




//  var a=40;
//  if(a>20){
//     var a=90;
//     console.log("a inside if ="+a);
//  }else{
//     console.log("hii inside else")
//  }
//     console.log("a outside if ="+a);



//  let a=40;
//  if(a>20){
//     let a=90;
//     console.log("a inside if ="+a);
//  }else{
//     console.log("hii inside else")
//  }
//     console.log("a outside if ="+a);

// function as a expression
// const data=function greetings(msg){
//     return "hii welcome to abes"+msg;
// }
// const msg=data(" vansh");
// console.log(msg);

// const data=(myname)=>{
//     return "hii"+myname+"welcome to fsd";
// }
// const msg=data(" rahul ");
// console.log(msg);

// const data= msg=>msg;
// console.log(data("hello"));

// IIFE

// (function(){
//     console.log("welcome to fsd")
// })();
// without call
// (()=>{
//     console.log("welcome to fsd")
// })();

// function greetings(msg="hiii..."){
//     console.log(msg+" welcome to fsd");
// }
// greetings("hello");

// function MessageChannel(){
//  console.log("hii welcome to fsd");
// }
// setTimeout(()=>{
//     console.log("hii welcome to fsd");
// },1000);

// function msg(){
//     console.log("hii welcome to fsd");
// }
// setInterval(msg,1000);

function selectlanguage(lang){
    let data;
    if(lang=="java"){
        function javaCompiler(){
            return "java compiler calling";
    }
    data=javaCompiler();
}
else if(lang=="C"){
    function CCompiler(){
        return "C compiler calling";
}
data=CCompiler();
}
else{
    data=" no such compiler found"
}
return data;
}
const result= selectlanguage("c");
console.log(result);