let { AssertSimpleType } = require('../utils/functions');

function closingIsRight(openingChar, lastChar){
    return openingChar === lastChar;
};

function getOpeningChar(char){
    const closingChars = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    return closingChars[char];
};

function updateLastObject(lastObject, newValue, newIndex) {
    lastObject.value = newValue;
    lastObject.index = newIndex;
}

function isValidInput(inputString){

    if(inputString.trim() === ""){
        return true;
    }

    let returnValue = false;

    let lastObject = {
        index:0,
        value: "",
    };

    const arrayChars = [...inputString];

    for (let charIdx = 0; charIdx < arrayChars.length; charIdx++) {
        
        const char = arrayChars[charIdx];
        let respectiveOpeningChar = getOpeningChar(char);
        
        if(respectiveOpeningChar){
            if(closingIsRight(respectiveOpeningChar, lastObject.value)){
                if(charIdx === arrayChars.length - 1){
                    returnValue = true;
                    break;
                }

                let nextLastIndexToVerify = lastObject.index - 1;

                if(nextLastIndexToVerify >= 0){
                    updateLastObject(lastObject, arrayChars[nextLastIndexToVerify], nextLastIndexToVerify);
                } else {
                    updateLastObject(lastObject, "", 0);
                }

            } else {
                break;
            }
        } else if(["(", "[", "{"].includes(char)) {
            updateLastObject(lastObject, char, charIdx);
        }
    }

    return returnValue;
};

function runTest(inputString, outputValue){
    console.log(`Result`, AssertSimpleType(isValidInput(inputString), outputValue));
};


module.exports.mainCloseParentesis = () => {
    console.log(`========== Verify right close elements challenge ==========`)
    const testCases = {
        "Example 0":{
            Input: "",
            Output: true,
        },
        "Example 0.1":{
            Input: " ",
            Output: true,
        },
        "Example 1":{
            Input: "()",
            Output: true,
        },
        "Example 2":{
            Input: "()[]{}",
                    Output: true,
        },
        "Example 3":{
            Input: "(]",
            Output: false,
        },
        "Example 4":{
            Input: "([)]",
            Output: false,
        },
        "Example 5":{
            Input: "{[]}",
            Output: true,
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
