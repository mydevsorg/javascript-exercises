const removeFromArray = function (arr, ...args) {
  return arr.filter((item) => !args.includes(item));
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
