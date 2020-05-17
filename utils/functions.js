module.exports.AssertSimpleType = (expected, received) => {
    if(expected === received){
        return true;
    }
    return false;
};

module.exports.IsPrime = (number) => {
    if(number === 2) return true;
    if(number === 3) return true;

    if (number%2 == 0 || number%3 == 0) return false; 
    
    const verificationLimit = Math.ceil(Math.sqrt(number));
    for (let index = 5; index <= verificationLimit; index+=6) {
        if (number%index == 0 || number%(index+2) == 0) {
            return false;
        }
    }

    return true;
};

module.exports.GetPrimesTo = (numberLimit) => {
    let isprime = Array(numberLimit).fill(true);
    let primesList = [2];
    let smallPrimeFactors = Array(numberLimit).fill(1);

    for (let j=0; j < primesList.length && 2*primesList[j] < numberLimit && primesList[j] <= smallPrimeFactors[2]; j++) { 
        isprime[2*primesList[j]]=false;
        smallPrimeFactors[2*primesList[j]] = primesList[j]; 
    }

    for (let i=3; i < numberLimit; i+=2) {
        // If isPrime[i] == True then i is 
        // prime number 
        if (isprime[i]) {
            // put i into prime[] vector 
            primesList.push(i); 
  
            // A prime number is its own smallest 
            // prime factor 
            smallPrimeFactors[i] = i; 
        } 
  
        // Remove all multiples of  i*prime[j] which are 
        // not prime by making isPrime[i*prime[j]] = false 
        // and put smallest prime factor of i*Prime[j] as prime[j] 
        // [ for exp :let  i = 5 , j = 0 , prime[j] = 2 [ i*prime[j] = 10 ] 
        // so smallest prime factor of '10' is '2' that is prime[j] ] 
        // this loop run only one time for number which are not prime 
        for (let j=0; j < primesList.length && i*primesList[j] < numberLimit && primesList[j] <= smallPrimeFactors[i]; j++) { 
            isprime[i*primesList[j]]=false; 
  
            // put smallest prime factor of i*prime[j] 
            smallPrimeFactors[i*primesList[j]] = primesList[j]; 
        }
    }

    return primesList;
};

module.exports.GetGDC_fromArray = (numbersList, numberOfElementsIntoArray) => {
        // Use spread syntax to get minimum of array
        const lowest = Math.min(...numbersList);
    
        for (let factor = lowest; factor > 1; factor--) {
            let isCommonDivisor = true;
    
            for (let j = 0; j < numberOfElementsIntoArray; j++) {
                if (numbersList[j] % factor !== 0) {
                    isCommonDivisor = false;
                    break;
                }
            }
    
            if (isCommonDivisor) {
                return factor;
            }
        }
    
        return 1;    
};