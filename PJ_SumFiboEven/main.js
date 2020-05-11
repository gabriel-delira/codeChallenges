function getSumOfFibonacciEvenNumbers(limit) {
    
    const fibonacci = [1, 2];
    let currentNumber = 2;
    let sum = 2;
    while(currentNumber < limit){
        currentNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if(currentNumber % 2 === 0){
            sum += currentNumber;
        }
        fibonacci.push(currentNumber);
        // console.log(`currentNumber`)
    }
    return sum;
};

function runTest(){
    const output = getSumOfFibonacciEvenNumbers(4000000);
    console.log(`Result`, output);
};

module.exports.mainSumEvenNumberFibonnaciSequence = () => {
    console.log(`========== Sum of even numbers of Fibonacci sequence to 4 Million ==========`);
    runTest();
    console.log(`====================================================`);
};