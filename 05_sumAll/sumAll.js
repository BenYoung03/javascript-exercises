const sumAll = function(start, end) {

    if(start < 0 || end < 0) return "ERROR";
    if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";

    if(end < start){
        const temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;
    for(start; start <= end; start++){
        sum += start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
