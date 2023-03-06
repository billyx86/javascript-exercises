const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  c = a - b;
  return a - b;
};

const sum = function(array) {
  const sumResult = array.reduce((accumulator, item) => {
    return accumulator + item;
  }, 0);
  return sumResult;
};

const multiply = function(array) {
  const multiplyResult = array.reduce((accumulator, item) => {
    return accumulator * item;
  }, 1);
  return multiplyResult;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(number) {
	if(number === 0) {
    return 1;
  } else {
    let result = 1;
    for(let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  }
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
