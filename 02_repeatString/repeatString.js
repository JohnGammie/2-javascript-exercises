const repeatString = function(text , repeats) {

    if (repeats < 0) {
        return 'ERROR';
    }
    let returnString = "";
    for (let i = 0 ; i < repeats ; i++) {
        returnString += text;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
