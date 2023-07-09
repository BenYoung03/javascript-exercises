const repeatString = function(str, numTimes) {
    if(numTimes < 0){
        return "ERROR";
    }
    let string = "";
    for(let i = 0; i < numTimes; i++){
        string += str;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
