let { AssertSimpleType } = require('../utils/functions');

function runTest(input, outputValue){
    const output = getAccumulatedWater(input);
    console.log(`Result`, output);
    console.log(`Is right?`, AssertSimpleType(outputValue, output));
};

function getLeftBiggerBorderIndex(arr, currentIndex){
    const previousIndex = currentIndex - 1;

    if(previousIndex < 0){
        return currentIndex;
    }

    if(arr[previousIndex] >= arr[currentIndex]){
        return getLeftBiggerBorderIndex(arr, previousIndex);
    } else {
        return currentIndex;
    }
};

function getRightBiggerBorderIndex(arr, currentIndex){
    const nextIndex = currentIndex + 1;

    if(nextIndex >= arr.length){
        return currentIndex;
    }

    if(arr[nextIndex] >= arr[currentIndex]){
        return getRightBiggerBorderIndex(arr, nextIndex);
    } else {
        return currentIndex;
    }
};

function getAccumulatedWater(inputList){
    let pitsVolume = 0;
    let currentIndex = 1;
    while (currentIndex < inputList.length-1) {
        const indexBorderLeft = getLeftBiggerBorderIndex(inputList, currentIndex);
        const indexBorderRight = getRightBiggerBorderIndex(inputList, currentIndex);
        if(indexBorderLeft == currentIndex || indexBorderRight == currentIndex){
            currentIndex++;
            continue;
        }

        let leftBorderValue = inputList[indexBorderLeft];
        let rightBorderValue = inputList[indexBorderRight];        
        for (let pitIndex = indexBorderLeft+1; pitIndex < indexBorderRight; pitIndex++) {
            if(leftBorderValue <= rightBorderValue){
                pitsVolume += Math.abs(inputList[pitIndex] - leftBorderValue);
            } else {
                pitsVolume += Math.abs(inputList[pitIndex] - rightBorderValue);
            }
        }
        currentIndex = indexBorderRight;
    }

    return pitsVolume;
};

module.exports.mainWaterPit = () => {
    console.log(`========== Water Pits challenge ==========`)
    const testCases = {
        "Example 0":{
            Input: [0,1,0,2,1,0,1,3,2,1,2,1],
            Output: 6,
        },
        "Example 1":{
            Input: [2, 1, 1, 3],
            Output: 2,
        },
    }
    
    Object.keys(testCases).forEach(testKey => {
        const input = testCases[testKey].Input;        
        console.log(`testCase: `, testKey, `\n\tInput:'${input}'`);
        runTest(input, testCases[testKey].Output);
        console.log()
    });

    console.log(`==========================================================`)
};
