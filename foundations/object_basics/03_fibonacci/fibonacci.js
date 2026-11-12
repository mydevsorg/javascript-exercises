const fibonacci = function (n) {
  if (n === 0 || n < 0 || Number.isNaN(n) || !Number.isInteger(n)) {
    return "OOPS";
  } else {
    const fibSeq = [1, 1];

    for (let i = 2; i <= n; i++) {
      fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq[n - 1];
  }
};

console.log(fibonacci(4));
console.log(fibonacci(6));
console.log(fibonacci(0));
console.log(fibonacci(-5));
console.log(fibonacci(NaN));

// Do not edit below this line
module.exports = fibonacci;
