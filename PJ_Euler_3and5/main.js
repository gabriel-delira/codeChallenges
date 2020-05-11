function getMultiplesInRange(number, begin, end) {    
    let multiplesList = [];
    for (let currentNumber = begin; currentNumber < end; currentNumber++) {        
        if(currentNumber%number === 0){
            multiplesList.push(currentNumber);
        }
    }

    return multiplesList;
};


function getSumOfMultiples(){
    const multiples_3 = getMultiplesInRange(3, 0, 1000);
    const multiples_5 = getMultiplesInRange(5, 0, 1000);

    // console.log(`multiples_3`, multiples_3);
    // console.log(`multiples_5`, multiples_5);

    const sumOfMultiples_3 = multiples_3.reduce((a, b) => a + b, 0);
    const sumOfmultiples_5 = multiples_5.filter(e => e%3 !== 0).reduce((a, b) => a + b, 0);

    console.log(`sumOfMultiples_3`, sumOfMultiples_3);
    console.log(`sumOfmultiples_5`, sumOfmultiples_5);

    return sumOfMultiples_3 + sumOfmultiples_5;
};

function runTest(){
    const output = getSumOfMultiples();
    console.log(`Result`, output);
};

module.exports.mainMultiplesOf_3_5 = () => {
    console.log(`========== Multiples of 3 and 5 challenge ==========`);
    runTest();
    console.log(`====================================================`);
};