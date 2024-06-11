const add = function(...args) {
	return args.reduce((total, current) => {
    return total += current;
  }, 0)
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(array) {
  let result = array.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(array) {
  let result = array.reduce((sum , current) => sum * current, 1);
  return result;

};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
