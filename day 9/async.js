const waitForSomeTime = (sec) => {
    setTimeout(() => {
       console.log("wait has been done");
    }, sec);
}
const asyncFun = () => {
    waitForSomeTime(5000);
  
}
console.log("Before async function");
asyncFun();
console.log("After async function");
