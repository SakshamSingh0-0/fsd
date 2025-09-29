

const waitForSomeTime = (sec)=>{
    const start = Date.now();
    while(Date.now() - start < sec);{
        // do nothing
    }

}
const syncFun = ()=>{
    waitForSomeTime(5000);
    console.log("wait has been done");
}
console.log("Before sync function");
syncFun();
console.log("After sync function");