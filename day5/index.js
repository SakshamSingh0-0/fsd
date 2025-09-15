// console.log("welcome guys");
// document.write("welcy");
// document.write("welcy");
// document.writeln("welcy");
// alert("alert msg")
// console.log(a);
// var a=20;
// console.log(a);
// var a=30
// console.log(a);
// {
//     var a=40;
//     console.log(a);
// }
// let a=30;
// a=650;
// console.log(fun);
// function fun(){
//     let a=90;
//     console.log(a);
//     // return 80;
// }
// console.log(fun());
// let a= "22"+22+5-5;
// console.log(a);

//***/ primitive data types****
// let x=5;
// function modify(val)
// {
//     val=10;
// }
// modify(x);
// console.log(x);

// (()=>{
//    var x=y=6;
// })();
// console.log(x);
// console.log(y);
// console.log(typeof x);
// console.log(typeof y);

// let a= 23 - "23" + true + false - true +23 +(-23);
// console.log(a);
// console.log(typeof NULL);
// console.log(typeof NaN);
// console.log(typeof undefined);
// console.log(typeof null);

// non-primitive data types
const car={
    brand :"BMW",
    model :"X5",
    year :{
        y1:2020,
        y2:2021
    }
}

const myCars= Object.assign({},car);
myCars.model="X7";
myCars.year.y1=2022;  
console.log(myCars.model);  
console.log(car.model);                 
console.log(myCars.year.y1);
console.log(car.year.y1);

// function changeModel(obj){
//     obj.model="X6";
// }
// changeModel(car);
// console.log(car.brand);
// console.log(car.model);

// const myCars= Object.assign({},car);
// myCars.model="X7";
// console.log(myCars.model);
// console.log(car.model);