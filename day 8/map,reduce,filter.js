const arr1 = [2,4,6,10,12,16];

const mapOutput = arr1.map((val)=>val*2);
console.log(mapOutput);

const sumOutput = arr1.reduce(
    // previous value, current value
    (acc,val)=>{
        acc+=val;
        return acc;
    },0)
    console.log(sumOutput);
    const divisibleNum = arr1.filter((val)=>{
        return val % 5 ==0;
    }
)

    
console.log(sumOutput);