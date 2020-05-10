function Assert(expected, received){
    if(expected === received){
        return true;
    }
    return false;
};

function ClosingIsRight(openingChar, lastChar){    
    return openingChar === lastChar;
};

function IsClosingChar(char){
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

function IsValidInput(inputString){

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
        let respectiveOpeningChar = IsClosingChar(char);
        
        if(respectiveOpeningChar){
            if(ClosingIsRight(respectiveOpeningChar, lastObject.value)){
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

function RunTest(inputString, outputValue){    
    console.log(`Result`, Assert(IsValidInput(inputString), outputValue));
};


module.exports.mainCloseParentesis = () => {
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
        console.log()
        console.log(`testCase: `, testKey, `\n\tInput:'${input}'`);
        RunTest(input, testCases[testKey].Output);
        console.log()
    });

};
