let { IsPrime } = require('../utils/functions');


function getMaxPrimeFactorOf(number) {
    let maxPrimeFactor = 2;
    if(number % 2 !== 0) maxPrimeFactor = 1;

    const loopLimit = Math.ceil(Math.sqrt(number));
    for(let i=3; i < loopLimit; i+=2){
        if(number%i === 0){
            if(IsPrime(i)){
                maxPrimeFactor = i;
            }
        }
    }

    return maxPrimeFactor;
};

function runTest(){
    // const output = getMaxPrimeFactorOf(13195);
    const output = getMaxPrimeFactorOf(600851475143);    
    console.log(`Result`, output);
};

module.exports.mainMaxPrimeFactor = () => {
    console.log(`========== Find max prime factor of "n" ==========`);
    runTest();
    console.log(`====================================================`);
};