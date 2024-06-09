const sumAll = function (min, max) {
  if (!isNumber(min) || !isNumber(max) || !isPositiveNumber(min) || !isPositiveNumber(max)) {
    return "ERROR";
  }

  let sum = 0;
  if (min > max) {
    let tempMin = min;
    let tempMax = max;
    min = tempMax;
    max = tempMin;
  }
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

function isNumber(value) {
  return typeof value === "number";
}

function isPositiveNumber(value) {
    return (value > 0);
}

// Do not edit below this line
module.exports = sumAll;
