module.exports.AssertSimpleType = (expected, received) => {
    if(expected === received){
        return true;
    }
    return false;
};