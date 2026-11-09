const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function (base, pow) {
  return base ** pow;
};

const factorial = function (num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
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
  factorial,
};
