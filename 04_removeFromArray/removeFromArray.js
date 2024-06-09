const removeFromArray = function(values, ...args) {
    return values.filter((value) => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
