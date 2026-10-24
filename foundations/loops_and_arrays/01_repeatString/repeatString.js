const repeatString = function (str, num) {
  for (let i = 0; i <= num; i++) {
    return Array(num + 1).join(str);
  }
};

console.log(repeatString("hey", 4));

// Do not edit below this line
module.exports = repeatString;
